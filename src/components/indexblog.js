import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Link} from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import Moment from 'react-moment';
import { Icon, InlineIcon } from '@iconify/react';
import clockCircleOutlined from '@iconify/icons-ant-design/clock-circle-outlined';

const IndexBlog = () => {

    const data = useStaticQuery(graphql`
    
  {  
        allStrapiBlogPosts(limit: 3){
            totalCount
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
    
    
    `)

    

    return (
        <section className="index-blog">
            <div className="container">
                <h2>See what we've been up to</h2>
                <div className="indexblog-container">
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

                <div className="button-container indexblog-cta">
                    <Link to="/blog">View all blogs</Link>
                </div>
            </div>
        </section>
    )
}

export default IndexBlog