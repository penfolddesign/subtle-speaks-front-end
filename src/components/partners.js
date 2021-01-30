import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

import Slider from 'react-slick';


const Partners = () => {

    const data = useStaticQuery(graphql`

    query MyQuery {
      logos:strapiPartnerLogos {
      
       
            Logos {
              alternativeText
              url
              formats{
                thumbnail{
                  childImageSharp{
                    fixed(quality: 100){
                      ...GatsbyImageSharpFixed_noBase64
                    }
                  }
                }
              }
              
            
          }
        
      }
    }
    
    
    
    
    
    
    
    `)
    
    console.log({data})
   

   
    const settings = {

      dots: true,
      
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
          {
          breakpoint: 1400,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
           
          }
          },
          {
          breakpoint: 990,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 700,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }


      ]}

    return (

      

       
        <section className="partners-section">

          <div className="container">

            <div className="partner-content">
            <div className="partner-title">
            <h3>Who we work with</h3>
            <p>We working with numerous organisations and charities throughout the UK, who believe in the same things we do.</p>
            </div>
            </div>
           
            <Slider {...settings}>
            {data.logos.Logos.map(image =>(
               <div className="item">
                <Img fixed={image.formats.thumbnail.childImageSharp.fixed} key={image.id}/>
                <span key={image.id}>{image.alternativeText}</span>
              </div> 
             ))}
            </Slider>
           

          </div>

        </section>
  
            
            
            
            


    )
}

export default Partners
