import React from 'react'
import Layout from '../components/layout'
import ProjectBanner from '../components/projects/projectbanner'
import Markdown from 'react-markdown'
import {graphql} from 'gatsby';
import ProjectBox from '../components/projects/ProjectBox'
import ProjectBoxContainer from '../components/projects/ProjectBoxContainer'

import ProjectImage from '../images/cca-banner.jpeg'


import filePDF from '../images/GetFitWithSolihullMoors.pdf'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

const ProjectCCA = ({data}) => {


    const result = data.epc

    const settings = {

        dots: false,
        
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
             
            }
            },
            {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
  
  
        ]}


    return (
        <Layout>
               <ProjectBanner
               
               background={ProjectImage}
               title="Project CCA."
               description="Creative Community Awareness"

               
               />

           
               <div className="project-main-container">
                   <div className="container cca-blurb">
                       <p style={{textAlign: 'center'}}>The current climate has encroached on our physical & mental wellbeing whilst creating mental fatigue that has deeply affected communities & individuals across the globe.</p>
                   </div>
                   <div className="blurb">
                  <div className="container">
                  <div className="cca-about">
                            <div className="text"><Markdown source={result.MainContent} escapeHtml={false}/></div>
                                        <img src="https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613409756/football_5fa098942a.jpg" alt="CCA Football"/>
                            </div>
                  </div>
                       
                   </div>
                
                     <div className="container">
                     <ProjectBoxContainer project="#FFC2C2">

                    <ProjectBox
                    content="Community Connectivity"
                    color="#FF6F6F"

                    />
                    <ProjectBox
                    content="Mentorship"
                    color="#FF6F6F"

                    />
                    <ProjectBox
                    content="Health and wellbeing programme"
                    color="#FF6F6F"

                    />
                    <ProjectBox
                    content="90 second film"
                    color="#FF6F6F"

                    />


</ProjectBoxContainer>
                     </div>
                 
                   <div className="project-about cca-about-container">
                 
              <div className="container">
                        
              <div className="container" style={{textAlign: 'center'}}><Markdown source={result.Description} escapeHtml={false}/></div>

              <div className="get-fit-slider">
                  <Slider {...settings}>

                    <div className="pdf-item">
                        <img src="https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613412298/Get_Fit_P1_d22d2b631d.jpg" alt=""/>
                    </div>

                    <div className="pdf-item">
                        <img src="https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613412298/Get_Fit_P2_c3f8b159a7.jpg" alt=""/>
                    </div>

                    <div className="pdf-item">
                        <img src="https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613412298/Get_Fit_P3_071895b2bb.jpg" alt=""/>
                    </div>

                    <div className="pdf-item">
                        <img src="https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613412298/Get_Fit_P4_6fe61c05c8.jpg" alt=""/>
                    </div>

                  </Slider>
              </div>
                       <div className="project-logo">
                       <img src="https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613239429/ccalogo_450_dad1f08a25.png" alt="Project EPC Logo"/>
                   </div>
              </div>
                   
                   </div>

                   
               </div>
            
               <div class="cca-banner" style={{backgroundImage: 'url(https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613238935/solihullmoors_0a7a6d7d68.jpg)' }}>
                   <div class="container">
                       <h3>Get Fit with Solihull Moors</h3>
                       <p>Click the button below to download the PDF.</p>
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