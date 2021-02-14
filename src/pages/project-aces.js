import React from 'react'
import Layout from '../components/layout'
import ProjectBanner from '../components/projects/projectbanner'
import Markdown from 'react-markdown'
import {graphql} from 'gatsby';
import ProjectBox from '../components/projects/ProjectBox'
import ProjectBoxContainer from '../components/projects/ProjectBoxContainer'

import ProjectImage from '../images/aces-banner.jpg'
import SocialSection from '../components/social';

const ProjectACES= ({data}) => {


    const result = data.epc


    return (
        <Layout>
               <ProjectBanner
               
               background={ProjectImage}
               title="Project ACES."
               description="Safer.Dance"

               
               />

               <div className="container">
               <div className="project-main-container">
                   <div className="aces-blurb">
                        <video src="https://res.cloudinary.com/dhh2ejp7p/video/upload/v1612018734/FINAL_0dce5e5291.mp4" controls></video>
                        <div className="aces-content">
                        <Markdown source={result.MainContent} escapeHtml={false}/>
                        </div>
                   </div>
                
                        <ProjectBoxContainer project="#AFE1FC">

                            <ProjectBox
                            content="Research & data analysis"
                            color="#6ECBFF"
                            
                            />
                            <ProjectBox
                            content="The provision of educational resources"
                            color="#6ECBFF"
                            
                            />
                            <ProjectBox
                            content="Support & guidance from global experts"
                            color="#6ECBFF"
                            
                            />
                            <ProjectBox
                            content="Implementation of up to date policies & procedures "
                            color="#6ECBFF"
                            
                            />


                        </ProjectBoxContainer>
                 
                   <div className="project-about">
                       <Markdown source={result.Description} escapeHtml={true}/>
                   </div>

                   <div className="project-logo">
                       <img src="https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613239429/aceslogo_450_f199afba74.png" alt="Project ACES Logo"/>
                   </div>
               </div>
               </div>
               <div className="epc-banner" style={{backgroundImage: 'url(https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613311635/aces_signup_9599461ab8.jpg)' }}>
                   <div className="container">
                   <div className="epc-content">
                       <h3>Join the movement</h3>
                       <p>Please enter your name and e-mail addess below to recieve all information surrounding Project ACES.</p>
                       <form action="">

                           <div className="form-container">

                            <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email"/>
                                </div>

                           </div>

                           <button type="submit">Sign Up</button>
                       </form>
                       <span>By clicking signup you agree to allow us to send you e-mails regarding Project ACES and other Subtle Speaks information.</span>
                   </div>
                   </div>
               </div>
        </Layout>
    )
}


export default ProjectACES

export const query = graphql`

    query ProjectACES{

        epc:strapiProjects(Name: {eq: "Project ACES - Safer.Dance"}) {
            id
            Name
            Description
            MainContent
          }



    }






`