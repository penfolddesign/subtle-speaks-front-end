import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'
import BackgroundImage from '../images/rave-header2.jpg'

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
           
               
                    
                    <div className="hero-content">
                        <h1>{result.Title}<span style={{color: '#2BB2FF'}}>.</span></h1>
                        <span className="subheading">RECRUITMENT & WELLBEING</span>
                        <a href="/#about" className="landing-cta">{result.ButtonText}</a>
            </div>
     

        </section>
    )
}

export default LandingHero
