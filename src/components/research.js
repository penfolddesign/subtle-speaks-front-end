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
                <h2>The problem contains the solution.</h2>
                <p className="description-text" style={{textAlign: 'center'}}>
                We are conducting continuous research to enhance our projects and learn more about the issues we aim to tackle. Read some further research surrounding these societal issues below.
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
