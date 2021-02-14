import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'



const ResearchSection = () => {

    const data = useStaticQuery(graphql`
    
    query ResearchIndexQuery{

        allStrapiResearchProjects {
            edges {
              node {
                Title
                slug
                RelatedProject
              }
            }
          }



    }
    
    
    
    `)


    

    return (
        <section className="research-section" id="research">
            <div className="container">
                <h2>We are on a mission to change the industry.</h2>
                <p className="description-text" style={{textAlign: 'center'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="research-container">
                {data.allStrapiResearchProjects.edges.map(project =>(

                <>
                   <Link to= {`/research/${project.node.slug}`}>
                        <div className="research-link" data-aos="fade-up">

                       <div className="research-title">
                            <span className={project.node.RelatedProject}> Project {project.node.RelatedProject}</span>
                            <h3> {project.node.Title}</h3>
                       </div>
                        
                        <div className="research-button button-container">
                        <Link to= {`/research/${project.node.slug}`}>

                        <div className="research-button button-container">

                                Read More

                        </div>

                        </Link>
                        </div>
                        


                        </div>



                   </Link>
                </>


                ))}
                </div>
            </div>

        </section>
    )
}

export default ResearchSection
