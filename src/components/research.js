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
                <h1>We are on a mission to change the industry.</h1>
                <div className="research-container">
                {data.allStrapiResearchProjects.edges.map(project =>(

                <>
                   <Link to= {`/research/${project.node.slug}`}>
                        <div className="research-link">

                       <div className="research-title">
                            <span className={project.node.RelatedProject}> Project {project.node.RelatedProject}</span>
                            <h3> {project.node.Title}</h3>
                       </div>
                        
                        <div className="research-button button-container">
                        <Link to= {`/research/${project.node.slug}`}>

                        <div className="research-button button-container">

                                Learn More

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
