import React from 'react'
import ProjectMain from '../projects/projectmain'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Markdown from 'react-markdown';
import {AnchorLink} from 'gatsby-plugin-anchor-links'
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

              publicURL
            }
          }



    }
    
    
    
    
    
    `)

    const result = data.strapiProjects

    return (
        <>
   
        <div class="cca-container">
    <AnchorLink to="/project-cca" stripHash>
      <ProjectMain
            
            title="Project CCA"
            description="A mission to create environments that applauds and nurtures young people&#39;s
            physical and mental outlook."
            image={result.ProjectImage.publicURL}

            />
    </AnchorLink>
      </div>

    </>

        
    )
}

export default CCA
