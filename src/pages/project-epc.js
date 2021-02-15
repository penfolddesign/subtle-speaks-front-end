import React from 'react'
import Layout from '../components/layout'
import ProjectBanner from '../components/projects/projectbanner'
import Markdown from 'react-markdown'
import {graphql} from 'gatsby';
import ProjectBox from '../components/projects/ProjectBox'
import ProjectBoxContainer from '../components/projects/ProjectBoxContainer'

import ProjectImage from '../images/epc-banner.jpg'

const ProjectEPC = ({data}) => {


    const result = data.epc


    return (
        <Layout>
               <ProjectBanner
               
               background={ProjectImage}
               title="Project EPC."
               description="Educate. Practice. Create"

               
               />

        
               <div className="project-main-container epc-project-container">
                   <div className="project-blurb">
                      <div className="container">
                      <Markdown source={result.MainContent} escapeHtml={false}/>
                      </div>
                   </div>
                
                    <div className="container">
                    <ProjectBoxContainer project="#FED27D">

                        <ProjectBox
                        content="Thought provoking guest talks"
                        color="#FEC600"

                        />
                        <ProjectBox
                        content="Practical workshops"
                        color="#FEC600"

                        />
                        <ProjectBox
                        content="Q&A with industry professionals"
                        color="#FEC600"

                        />
                        <ProjectBox
                        content="Implementation of up to date policies & procedures"
                        color="https://subtle-speaks-front-end.netlify.app/"
                        color="#FEC600"
                        />


                        </ProjectBoxContainer>
                    </div>
                 
                   <div className="project-about epc-about">
                       <div className="container">
                       <Markdown source={result.Description} escapeHtml={false}/>
                   
                   <div className="project-logo">
                   <img src="https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613239429/epclogo_450_dc2f8948cf.png" alt="Project EPC Logo"/>
                       </div>
                   </div>
                   </div>
             
               </div>
         
               <div className="epc-banner" style={{backgroundImage: 'url(https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613310339/epc_signup_7b6931bd47.jpg)' }}>
                   <div className="container">
                   <div className="epc-content">
                       <h3>Signup for the newsletter</h3>
                       <p>Please enter your name and e-mail addess below to recieve all information surrounding Project EPC.</p>
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
                       <span>By clicking signup you agree to allow us to send you e-mails regarding Project EPC and other Subtle Speaks information.</span>
                   </div>
                   </div>
               </div>
        </Layout>
    )
}


export default ProjectEPC

export const query = graphql`

    query ProjectEPC{

        epc:strapiProjects(Name: {eq: "Project EPC - Educate, Practice, Create."}) {
            id
            Name
            Description
            MainContent
          }



    }






`