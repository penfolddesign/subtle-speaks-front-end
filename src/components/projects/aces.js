import React from 'react'
import ProjectMain from '../projects/projectmain'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Markdown from 'react-markdown';
import SocialSection from '../social';

import {AnchorLink} from 'gatsby-plugin-anchor-links'

const ACES = (props) => {

    const ReactMarkdownWithHtml = require('react-markdown/with-html')

    const data = useStaticQuery(graphql`
    
    query ACESProject{
        strapiProjects(Name: {eq: "Project ACES - Safer.Dance"}) {
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
   
            <div className="aces-container">
            <AnchorLink to="/project-aces" stripHash>
            <ProjectMain
            
            title="Project ACES"
            description="Through our ‘A.C.E.S’ programme we aim to improve the quality of nightlife by assisting the shift in attitude towards sexual assault & sexual harassment."
            image={result.ProjectImage.publicURL}
            
            />
           </AnchorLink>
        </div>

        </>
    )
}

export default ACES
