import React , {useEffect} from "react"

import { Link, graphql } from "gatsby"

import OtherLayout from "../components/otherLayout"
import Img from 'gatsby-image/withIEPolyfill'
import Moment from 'react-moment';
import { Icon, InlineIcon } from '@iconify/react';
import clockCircleOutlined from '@iconify/icons-ant-design/clock-circle-outlined';

import Aos from 'aos'
import "aos/dist/aos.css";
import SEO from "../components/seo";



export const pageQuery = graphql`

query BlogQuery {
  allStrapiBlogPosts{
    edges {
      node {

        categories{
          Name
        }

        Title
        slug
        CoverImage {
          childImageSharp {
            fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            }
          }
        }
        Excerpt
        PublishedAt
        Content
      }
    }
  }
}





`





const Blog = ({ data }) => {

  useEffect(() =>{
    Aos.init({

      once: true
    });

  }, []);

  return(
    <OtherLayout>
      <SEO title="Blog"/>
    <section className="blog-page" style={{backgroundImage: 'url(https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613240631/blog_background_afadc6563b.jpg)'}}>

    <div className="container">
          <div className="page-title" style={{paddingTop: '20px'}}>
            <h1>Keep "in" with the news.</h1>
            <p style={{textAlign: 'center', maxWidth: '700px', margin: '10px auto'}}>Please take a read of our blogs, and see what we get up to. We're always working hard to produce more interesting content for you to read about current matters.</p>
          </div>
          <div className="blog-container">
          {data.allStrapiBlogPosts.edges.map(article =>(

          <Link to={`/blog/${article.node.slug}`}>
          
          <div className="article-container">
            <div className="article-image">
              <Img 
              
              fluid={article.node.CoverImage.childImageSharp.fluid}
              objectFit="contain"
              objectPosition="50% 50%"
              
              />  
            </div>

          <div className="article-content">
          <div className="article-categories">
            

                <ul>
                {article.node.categories.map(category =>(
                  <li>{category.Name}</li>
                  ))}
                </ul>


            </div>

            <div className="article-description">
              <h3>{article.node.Title}</h3>
              <p>{article.node.Excerpt}</p>
            </div>
            
            <span><Icon icon={clockCircleOutlined}/><Moment format="MMM Do YYYY">{article.node.PublishedAt}</Moment></span>
          </div>

           

              
          </div>
      
      
      </Link>


    ))}

  </div>

      </div>


    </section>

  
    </OtherLayout>
  )
}

export default Blog

