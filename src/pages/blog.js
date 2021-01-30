import React , {useEffect} from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from 'gatsby-image/withIEPolyfill'
import Moment from 'react-moment';
import { Icon, InlineIcon } from '@iconify/react';
import clockCircleOutlined from '@iconify/icons-ant-design/clock-circle-outlined';

import Aos from 'aos'
import "aos/dist/aos.css";
import SEO from "../components/seo";



export const pageQuery = graphql`

query BlogQuery {
  allStrapiBlogPosts{
    edges {
      node {

        categories{
          Name
        }

        Title
        slug
        CoverImage {
          childImageSharp {
            fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            }
          }
        }
        Excerpt
        PublishedAt
        Content
      }
    }
  }
}





`





const Blog = ({ data }) => {

  useEffect(() =>{
    Aos.init({

      once: true
    });

  }, []);

  return(
    <Layout>
      <SEO title="Blog"/>
    <section className="blog-page">

    <div className="container">
          <div className="page-title">
            <h1>Keep "in" with the news.</h1>
          </div>
          <div className="blog-container">
          {data.allStrapiBlogPosts.edges.map(article =>(

          <Link to={`/blog/${article.node.slug}`}>
          
          <div className="article-container" data-aos="fade-up">
            <div className="article-image">
              <Img 
              
              fluid={article.node.CoverImage.childImageSharp.fluid}
              objectFit="contain"
              objectPosition="50% 50%"
              
              />  
            </div>

          <div className="article-content">
          <div className="article-categories">
            

                <ul>
                {article.node.categories.map(category =>(
                  <li>{category.Name}</li>
                  ))}
                </ul>


            </div>

            <div className="article-description">
              <h3>{article.node.Title}</h3>
              <p>{article.node.Excerpt}</p>
            </div>
            
            <span><Icon icon={clockCircleOutlined}/><Moment format="MMM Do YYYY">{article.node.PublishedAt}</Moment></span>
          </div>

           

              
          </div>
      
      
      </Link>


    ))}

  </div>

      </div>


    </section>

  
    </Layout>
  )
}

export default Blog

