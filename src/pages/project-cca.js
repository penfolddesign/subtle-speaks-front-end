import React from 'react'
import Layout from '../components/layout'
import ProjectBanner from '../components/projects/projectbanner'
import Markdown from 'react-markdown'
import {graphql} from 'gatsby';
import ProjectBox from '../components/projects/ProjectBox'
import ProjectBoxContainer from '../components/projects/ProjectBoxContainer'

import ProjectImage from '../images/cca-banner.jpeg'


import filePDF from '../images/GetFitWithSolihullMoors.pdf'

const ProjectCCA = ({data}) => {


    const result = data.epc


    return (
        <Layout>
               <ProjectBanner
               
               background={ProjectImage}
               title="Project CCA."
               description="Creative Community Awareness"

               
               />

               <div className="container">
               <div className="project-main-container">
                   <div className="project-blurb">
                       <Markdown source={result.MainContent} escapeHtml={false}/>
                   </div>
                
                        <ProjectBoxContainer project="#FFC2C2">

                            <ProjectBox
                            content="Thought provoking guest talks"
                            color="#FF6F6F"
                            
                            />
                            <ProjectBox
                            content="Practical workshops"
                            color="#FF6F6F"
                            
                            />
                            <ProjectBox
                            content="Q&A with industry professionals"
                            color="#FF6F6F"
                            
                            />
                            <ProjectBox
                            content="Implementation of up to date policies & procedures"
                            color="#FF6F6F"
                            
                            />


                        </ProjectBoxContainer>
                 
                   <div className="project-about cca-about">
                 
                       <div className="text"><Markdown source={result.Description} escapeHtml={false}/></div>
                       <img src="https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613238413/football_b4f8e29f94.jpg" alt="CCA Football"/>
                   </div>

                   <div className="project-logo">
                       <img src="https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613239429/ccalogo_450_dad1f08a25.png" alt="Project EPC Logo"/>
                   </div>
               </div>
               </div>
               <div class="cca-banner" style={{backgroundImage: 'url(https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613238935/solihullmoors_0a7a6d7d68.jpg)' }}>
                   <div class="container">
                       <h3>Get Fit with Solihull Moors</h3>
                       <p>Click the button below to get your FREE PDF.</p>
                       <div class="pdf-button button-container">
                           <a href={filePDF} target="_blank">DOWNLOAD</a>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}


export default ProjectCCA

export const query = graphql`

    query ProjectCCA{

        epc:strapiProjects(Name: {eq: "Project CCA - Creative Community Awareness"}) {
            id
            Name
            Description
            MainContent
          }



    }






`