import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

const About = () => {

    const data = useStaticQuery(graphql`

    query AboutQuery {
        allStrapiAboutSection {
          edges {
            node {
              AboutUs
              Description
              OurSolution
              Title
              WhatWeDo

              AboutUsImage{
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
              }

              WhatWeDoImage{
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
              }

              SolutionImage{
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
              }

            }
          }
        }
      }
      
      
    
    
    
    `)


    return (
       <section className="about-us" id="about">
           

           {data.allStrapiAboutSection.edges.map(info =>(
                <div className="container">

                <div className="about-us-title">
                        <h1>{info.node.Title}</h1>
                        <p>{info.node.Description}</p>
                </div>
            
                <div className="about-us-card-container">
                        <div className="card-container" data-aos="fade-up">

                            <div className="card-image">
                                <Img fluid={info.node.AboutUsImage.childImageSharp.fluid} 
                                    objectFit="contain"
                                    objectPosition="50% 50%"
                                
                                />
                            </div>

                            <div className="card-content">
                                <h2>Our Mission</h2>
                                <p>{info.node.AboutUs}</p>
                            </div>

                        </div>
                        <div className="card-container flex-reverse" data-aos="fade-up">

                            <div className="card-image">
                                <Img fluid={info.node.WhatWeDoImage.childImageSharp.fluid}
                                 objectFit="cover"
                                 objectPosition="50% 50%" />
                            </div>

                           <div className="card-content">
                                <h2>Our Vision</h2>
                                <p>{info.node.WhatWeDo}</p>
                           </div>

                        </div>
                        <div className="card-container"data-aos="fade-up"> 

                            <div className="card-image">
                                <Img fluid={info.node.SolutionImage.childImageSharp.fluid}
                                 objectFit="contain"
                                 objectPosition="50% 50%" />
                            </div>

                            <div className="card-content">
                                <h2>Our Values</h2>
                                <p>{info.node.OurSolution}</p>
                            </div>

                        </div>
                </div>


                </div>
           ))}
          
       </section>
    )
}

export default About
