/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
    
exports.onCreateNode = async ({ node, actions, store, cache }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type !== null && node.internal.type === "strapiPartnerLogos") {
    for (const category of node.category) {
      for (const image of category.images) {
        console.log(image);
        const fileNode = await createRemoteFileNode({
          url: "https://subtle-speaks-back-end.herokuapp.com/" + image.url,
          store,
          cache,
          createNode,
          createNodeId: (id) => image.id.toString(),
        });

        if (fileNode) {
          image.localFile___NODE = fileNode.id;
        }
      }
    }
  }
};


  exports.createPages = async({graphql, actions}) =>{

    const {createPage} = actions;
    const result = await graphql(

      `
      {

        blogs:allStrapiBlogPosts{

          edges{
            node{

              strapiId
              slug

            }
          }
        }


        projects:allStrapiResearchProjects{

          edges{
            node{

              strapiId
              slug

            }
          }
        }
      }
      
      
      `

    );

    if (result.errors){
      throw result.errors;
    }

    // Create Blog Pages

    const blogs = result.data.blogs.edges;
    const BlogTemplate = require.resolve("./src/templates/singleBlog.js");

    blogs.forEach((blog, index)=>{
      createPage({

        path: `/blog/${blog.node.slug}`,
        component: BlogTemplate,
        context:{
          slug: blog.node.slug,
        },
      });
    });

    const projects = result.data.projects.edges;
    const ResearchTemplate = require.resolve("./src/templates/singleResearch.js");

    projects.forEach((project, index)=>{
      createPage({

        path: `/research/${project.node.slug}`,
        component: ResearchTemplate,
        context:{
          slug: project.node.slug,
        },
      });
    });


  };


  module.exports.onCreateNode = async({node, actions, createNodeId}) => {

    const crypto = require(`crypto`);

    if (node.internal.type === "StrapiBlogPosts") {
      const newNode = {
        id: createNodeId(`StrapiBlogContent-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          content: node.content || " ",
          type: "StrapiBlogContent",
          mediaType: "text/markdown",
          contentDigest: crypto
            .createHash("md5")
            .update(node.content || " ")
            .digest("hex"),
        },
      };
      actions.createNode(newNode);
      actions.createParentChildLink({
        parent: node,
        child: newNode,
      });
    }

    
    if (node.internal.type === "StrapiResearchProjects") {
      const newNode = {
        id: createNodeId(`StrapiResearchContent-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          content: node.content || " ",
          type: "StrapiResearchContent",
          mediaType: "text/markdown",
          contentDigest: crypto
            .createHash("md5")
            .update(node.content || " ")
            .digest("hex"),
        },
      };
      actions.createNode(newNode);
      actions.createParentChildLink({
        parent: node,
        child: newNode,
      });
    }

  };



  // //Resarch Pages

  // exports.createPages = async({graphql, actions}) =>{

  //   const {createPage} = actions;
  //   const result = await graphql(

  //     `
  //     {

  //       projects:allStrapiResearchProjects{

  //         edges{
  //           node{

  //             strapiId
  //             slug

  //           }
  //         }
  //       }
  //     }
      
      
  //     `

  //   );

  //   if (result.errors){
  //     throw result.errors;
  //   }

    
  // };


  // module.exports.onCreateNode = async({node, actions, createNodeId}) => {

  //   const crypto = require(`crypto`);

  //   if (node.internal.type === "StrapiResearchProjects") {
  //     const newNode = {
  //       id: createNodeId(`StrapiResearchContent-${node.id}`),
  //       parent: node.id,
  //       children: [],
  //       internal: {
  //         content: node.content || " ",
  //         type: "StrapiResearchContent",
  //         mediaType: "text/markdown",
  //         contentDigest: crypto
  //           .createHash("md5")
  //           .update(node.content || " ")
  //           .digest("hex"),
  //       },
  //     };
  //     actions.createNode(newNode);
  //     actions.createParentChildLink({
  //       parent: node,
  //       child: newNode,
  //     });
  //   }
  // };