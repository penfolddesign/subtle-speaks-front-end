import React from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import Moment from "react-moment";
import OtherLayout from "../components/otherLayout";
import Markdown from "react-markdown";
import useSiteMetaData from '../hooks/use-site-metadata';
import SEO from '../components/seo'

//Social Icons
import {
        EmailShareButton, EmailIcon,
        FacebookShareButton, FacebookIcon,
        LinkedinShareButton, LinkedinIcon,
        TwitterShareButton, TwitterIcon,
        WhatsappShareButton, WhatsappIcon
    } from 'react-share';


export const query = graphql`

query SingleResearchQuery($slug: String!){
    strapiResearchProjects(slug: {eq: $slug}) {
     
        
          Title
          slug
          RelatedProject
          Content
        
      
    }
  }
  



`



const SingleResearch = ({data, location}) => {

        const {siteURL} = useSiteMetaData();
    const research = data.strapiResearchProjects

    

    return (
       <OtherLayout>
            <SEO
            
            title={research.Title}
            lang="en"
            
            />
            <section className="single-research-container">
                    <div className="research-banner">
                        <div className="content">
                        <span>Project {research.RelatedProject} - Research Project</span>
                    <h1>{research.Title}.</h1>
                        </div>
                    </div>
                    <div className="container">
                            <div>
                                    
                            <h3 style={{textAlign: 'center', fontSize: '28px'}}>{research.Title}</h3>
                                    <div className="blog-content research-content">
                                
                                    <Markdown source={research.Content} escapeHtml={false}/>
                                    


                                    <div className="blog-socials">
                <p style={{fontWeight: 'bold'}}>Share this research with others</p>

                {/* <a href={`${siteURL}${location.pathname}`}></a> */}

                <EmailShareButton url={`${siteURL}${location.pathname}`}
                    subject="Take a read of this Subtle Speaks Research Page"
                >
                    <EmailIcon round={true} size={36}/>
                </EmailShareButton>

                <FacebookShareButton url={`${siteURL}${location.pathname}`}
                    quote="Read this research blog I found on https://subtle-speaks.co.uk!"
                    hastag="#subtlespeaks"
                >
                    <FacebookIcon round={true} size={36}/>
                </FacebookShareButton>
                <TwitterShareButton url={`${siteURL}${location.pathname}`}
                
                    title={research.Title}
                    hashtags="#subtlespeaks"
                
                >
                    <TwitterIcon round={true} size={36}/>
                </TwitterShareButton>
                <LinkedinShareButton url={`${siteURL}${location.pathname}`}
                
                    title={research.title}
                    source={siteURL}
                
                >
                    <LinkedinIcon round={true} size={36}/>
                </LinkedinShareButton>
                <WhatsappShareButton url={`${siteURL}${location.pathname}`}
                
                    title={research.Title}
                >
                    <WhatsappIcon round={true} size={36}/>
                </WhatsappShareButton>

                </div>
                
                </div>
                </div>

                
            </div>
                       
            </section>

       </OtherLayout>
    )
}

export default SingleResearch
