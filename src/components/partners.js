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
              
            
          }
        
      }
    }
    
    
    
    
    
    
    
    `)
    
    console.log({data})
   

   
    const settings = {

      dots: false,
      
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

      

       
        
          <div className="partners">

            <div className="partner-content">
            <div className="partner-title">
            <h3>Proudly partnered with</h3>
            </div>
            </div>
           
            <Slider {...settings}>
            {data.logos.Logos.map(image =>(
               <div className="item">
                <img src={image.url} alt=""/>
                <span key={image.id}>{image.alternativeText}</span>
              </div> 
             ))}
            </Slider>
           

          </div>

  
  
            
            
            
            


    )
}

export default Partners
