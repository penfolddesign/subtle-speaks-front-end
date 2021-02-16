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
            description="Improving the quality of nightlife by creating a zero-tolerance approach to
            sexual assault and sexual harassment."
            image={result.ProjectImage.publicURL}
            
            />
           </AnchorLink>
        </div>

        </>
    )
}

export default ACES
