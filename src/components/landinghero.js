import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'
import BackgroundImage from '../images/rave-header2.jpg'
import Typing from 'react-typing-animation';

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
                        <Typing speed={100}>
                        <h1>{result.Title}<span style={{color: '#2BB2FF'}}>.</span></h1>
                        </Typing>
                        <span className="subheading">RECRUITMENT & WELLBEING</span>
                        {/* <a href="/#about" className="landing-cta">{result.ButtonText}</a> */}
                    
            
            </div>




<Link to="/#about" style={{position: 'absolute', bottom: '100px'}}>
<div class="chevron-container">
  <div class="chevron"></div>
  <div class="chevron"></div>
  <div class="chevron"></div>
</div>

  </Link>

     

        </section>
    )
}

export default LandingHero
