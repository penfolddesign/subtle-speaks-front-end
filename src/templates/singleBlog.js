import React from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import useSiteMetaData from '../hooks/use-site-metadata';
import SEO from '../components/seo'

import SingleBackground from '../images/blogbackground.jpg'
import { Icon, InlineIcon } from '@iconify/react';
import clockCircleOutlined from '@iconify/icons-ant-design/clock-circle-outlined';
import arrowLeftOutlined from '@iconify/icons-ant-design/arrow-left-outlined';

//Social Icons
import {
    EmailShareButton, EmailIcon,
    FacebookShareButton, FacebookIcon,
    LinkedinShareButton, LinkedinIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon
} from 'react-share';


export const query = graphql`

    query SingleBlogQuery($slug: String!){

        strapiBlogPosts(slug: {eq: $slug}){
            categories{
                Name
            }   
            strapiId
            Title
            Excerpt
            Content
            PublishedAt
            CoverImage {
                childImageSharp {
                  fixed (quality: 100){
                  ...GatsbyImageSharpFixed
                  }
                }
              }



        }




    }






`


const SingleBlog = ({data, location}) => {

    const blog = data.strapiBlogPosts

    const {siteURL} = useSiteMetaData();

    return (
        <>
        <SEO
        
        title={blog.Title}
        description={blog.Excerpt}
        lang="en"
        
        
        
        />
        <Layout>
            <div className="blogheader" style={{ backgroundImage: `url(${SingleBackground})` }}></div>
        
            <div className="container blog-single-container">
            <Link to="/blog" id="backtoblogs"><Icon icon={arrowLeftOutlined}/> Back to blogs</Link>
                <div className="blog-content">
                <div className="published">
                <Icon icon={clockCircleOutlined}/><Moment format="[Written] dddd MMM Do YYYY">{blog.PublishedAt}</Moment>
                    </div>
                <div className="blog-title">
                    <h1>{blog.Title}</h1>
                </div>
                <div className="blog-categories">
                <ul>
                    {blog.categories.map(category => (
                    <li>{category.Name}</li>
                    ))}
                </ul>
                </div>
            
                <div className="blog-image">
                    <Img fixed={blog.CoverImage.childImageSharp.fixed}/>
                </div>
            



                <Markdown source={blog.Content} escapeHtml={false}/>
            
                <div className="blog-socials">
                <p style={{fontWeight: 'bold'}}>Share this blog with others</p>

                {/* <a href={`${siteURL}${location.pathname}`}></a> */}

                <EmailShareButton url={`${siteURL}${location.pathname}`}
                    subject="Take a read of this Subtle Speaks Blog"
                >
                    <EmailIcon round={true} size={36}/>
                </EmailShareButton>

                <FacebookShareButton url={`${siteURL}${location.pathname}`}
                    quote="Take a read of this blog I found on https://subtle-speaks.co.uk!"
                    hastag="#subtlespeaks"
                >
                    <FacebookIcon round={true} size={36}/>
                </FacebookShareButton>
                <TwitterShareButton url={`${siteURL}${location.pathname}`}
                
                    title={blog.Title}
                    hashtags="#subtlespeaks"
                
                >
                    <TwitterIcon round={true} size={36}/>
                </TwitterShareButton>
                <LinkedinShareButton url={`${siteURL}${location.pathname}`}
                
                    title={blog.title}
                    summary={blog.Excerpt}
                    source={siteURL}
                
                >
                    <LinkedinIcon round={true} size={36}/>
                </LinkedinShareButton>
                <WhatsappShareButton url={`${siteURL}${location.pathname}`}
                
                    title={blog.Title}
                >
                    <WhatsappIcon round={true} size={36}/>
                </WhatsappShareButton>

                </div>
                
                </div>

                
            </div>


        </Layout>
        </>
    )
}

export default SingleBlog
