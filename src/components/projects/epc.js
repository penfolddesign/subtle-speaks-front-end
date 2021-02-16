import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Markdown from 'react-markdown';
import ProjectMain from '../projects/projectmain'
import {AnchorLink} from 'gatsby-plugin-anchor-links'



const EPC = () => {

    const data = useStaticQuery(graphql`
    
    query EPCProject{
        strapiProjects(Name: {eq: "Project EPC - Educate, Practice, Create."}) {
            MainContent
            Name
            Description
            ProjectImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }

              publicURL
            }
          }



    }
    
    
    
    
    
    `)

    const result = data.strapiProjects

    const ReactMarkdownWithHtml = require('react-markdown/with-html')


    return (
       <>
        <div className="epc-container">
           
        <AnchorLink to="/project-epc" stripHash>
                <ProjectMain
                
                title="Project EPC"
                description="A monthly networking schedule to provide beneficial access to
                knowledge, practical skills and existing relationships within the creative
                industries."
                image={result.ProjectImage.publicURL}
                
                />
            </AnchorLink>
            
        </div>
       </>
    )
}

export default EPC
