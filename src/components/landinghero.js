import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'
import BackgroundImage from '../images/landingbackground.jpg'
import MeetingImage from '../images/meetingimage.jpg'

const LandingHero = () => {

    const data = useStaticQuery(graphql`
    
    query LandingQuery {
        strapiLandingHero {
          Title
          Content
          ButtonText
        }
      }
    
    
    
    `)

    const result = data.strapiLandingHero

    return (
        <section className="landing-hero" style={{ backgroundImage: `url(${BackgroundImage})` }}>
           <div className="container">
                <div className="hero-container" data-aos="fade-up">
                    <img className="hero-image" src={MeetingImage}/>
                    
                    <div className="hero-content" data-aos="fade-left" data-aos-delay="200">
                        <h1>{result.Title}</h1>
                        <p>
                        {result.Content}
                        </p>
                        <div className="button-container landing-cta">
                            <Link to="#projects">{result.ButtonText}</Link>
                        </div>
                    </div>
                
                </div>
           </div>
     

        </section>
    )
}

export default LandingHero
