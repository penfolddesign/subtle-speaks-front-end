import React from 'react'
import ProjectMain from '../projects/projectmain'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Markdown from 'react-markdown';

const CCA = (props) => {

    const data = useStaticQuery(graphql`
    
    query CCAProject{
        strapiProjects(Name: {eq: "Project CCA - Creative Community Awareness"}) {
            MainContent
            Name
            Description
            ProjectImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }



    }
    
    
    
    
    
    `)

    const result = data.strapiProjects

    return (
        <>
        <div className="container">
        <div class="cca-container">
      <div data-aos="fade-right">
      <ProjectMain
            
            title={result.Name}
            description={result.Description}
            image={result.ProjectImage.childImageSharp.fluid}

            />
      </div>

            <div className="markdown-content" markdown="1">
            <strong><p>About this project:</p></strong>
                <Markdown source={result.MainContent} escapeHTML={false}/>
            </div>
        </div>
        </div>

    <div className="cca-banner">
        <div className="container">
      
                    <h4>Download the  Get Fit w/ Solihull Moors PDF</h4>

                    <div className="pdf-button button-container">

                        <Link>
                            DOWNLOAD
                        </Link>

                    </div>
                
                
        </div>
    </div>
    </>

        
    )
}

export default CCA
