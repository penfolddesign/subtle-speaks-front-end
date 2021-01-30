import React from 'react'
import ProjectMain from '../projects/projectmain'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Markdown from 'react-markdown';
import SocialSection from '../social';


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
            }
          }



    }
    
    
    
    
    
    `)


    const result = data.strapiProjects

    return (

        <>
        <div className="container">
            <div className="aces-container">
            <div data-aos="fade-left">
            <ProjectMain
            
            title={result.Name}
            description={result.MainContent}
            source="https://res.cloudinary.com/dhh2ejp7p/video/upload/v1612018734/FINAL_0dce5e5291.mp4"
            
            />
            </div>


             <div className="markdown-content" markdown="1" >
             <strong><p>About this project:</p></strong>
             <ReactMarkdownWithHtml source={result.Description} allowDangerousHtml />
             </div>
        </div>
        </div>

        <SocialSection/>
        </>
    )
}

export default ACES
