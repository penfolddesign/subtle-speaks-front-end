import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import Partners from './partners';

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
                        <h2>{info.node.Title}</h2>
                        <p className="description-text">{info.node.Description}</p>
                </div>
            
                <div className="about-us-card-container">
                        <div className="card-container" >

                        <div className="card-image">
                            <a href="#0" aria-labelledby="vision"></a>
                                <Img fluid={info.node.AboutUsImage.childImageSharp.fluid}
                                 objectFit="cover"
                                 objectPosition="50% 50%" />

                                 <div className="item__overlay">
                                   
                                         <h2 id="vision" aria-hidden="true">MISSION</h2>

                                        <div className="item__body">
                                            <p>{info.node.AboutUs}</p>
                                        </div>
                                 </div> 
                            </div>

                        </div>
                        <div className="card-container" >

                            <div className="card-image">
                            <a href="#0" aria-labelledby="vision"></a>
                                <Img fluid={info.node.WhatWeDoImage.childImageSharp.fluid}
                                 objectFit="cover"
                                 objectPosition="50% 50%" />

                                 <div className="item__overlay">
                                   
                                         <h2 id="vision" aria-hidden="true">Vision</h2>

                                        <div className="item__body">
                                            <p>{info.node.WhatWeDo}</p>
                                        </div>
                                 </div> 
                            </div>

                        </div>
                        <div className="card-container"> 

                        <div className="card-image">
                            <a href="#0" aria-labelledby="values"></a>
                                <Img fluid={info.node.SolutionImage.childImageSharp.fluid}
                                 objectFit="cover"
                                 objectPosition="50% 50%" />

                                 <div className="item__overlay">
                                   
                                         <h2 id="vision" aria-hidden="true">Values</h2>

                                        <div className="item__body">
                                            <p>{info.node.OurSolution}</p>
                                        </div>
                                 </div> 
                            </div>

                        </div>
                </div>

                <Partners/>


                </div>
           ))}

        
          
       </section>
    )
}

export default About
