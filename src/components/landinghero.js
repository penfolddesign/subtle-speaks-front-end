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
                        <Typing speed={50}>
                        <h1>{result.Title}<span style={{color: '#2BB2FF'}}>.</span></h1>
                        </Typing>
                        <span className="subheading">RECRUITMENT & WELLBEING</span>
                        {/* <a href="/#about" className="landing-cta">{result.ButtonText}</a> */}
                    
            
            </div>



<div id="wrapper">
<Link to="/#about">
  <div id="wrapper-inner">
<div id="scroll-down">
  <span class="arrow-down">
  </span>

</div>
  </div>
  </Link>
  </div>

     

        </section>
    )
}

export default LandingHero
