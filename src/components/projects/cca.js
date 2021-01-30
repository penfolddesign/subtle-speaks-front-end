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
            description={result.MainContent}
            image={result.ProjectImage.childImageSharp.fluid}

            />
      </div>

            <div className="markdown-content" markdown="1">
            <strong><p>About this project:</p></strong>
                <Markdown source={result.Description} escapeHTML={false}/>
            </div>
        </div>
        </div>

    <div className="cca-banner" style={{ backgroundImage: `url(https://res.cloudinary.com/dhh2ejp7p/image/upload/v1612021205/cca_banner_78156ce155.jpg)` }}>
        <div className="container">
      
                    <h3>Get Fit with Solihull Moors</h3>
                    <p>Click the button below to get your FREE PDF.</p>

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
