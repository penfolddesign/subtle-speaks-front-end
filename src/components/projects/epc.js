import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import Markdown from 'react-markdown';
import ProjectMain from '../projects/projectmain'

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
            }
          }



    }
    
    
    
    
    
    `)

    const result = data.strapiProjects

    const ReactMarkdownWithHtml = require('react-markdown/with-html')


    return (
        <div className="epc-container">
            <div className="container">
            <div data-aos="fade-left">
                <ProjectMain
                
                title={result.Name}
                description={result.Description}
                image={result.ProjectImage.childImageSharp.fluid}
                
                />
            </div>
               <div className="markdown-content">
                <strong><p>About this project:</p></strong>
                <ReactMarkdownWithHtml source={result.MainContent} allowDangerousHtml/>
               </div>
            </div>
        </div>
    )
}

export default EPC
