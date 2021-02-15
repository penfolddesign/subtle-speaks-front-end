import React from 'react'
import {Link} from 'gatsby'
import {useStaticQuery, graphql} from 'gatsby'
import { Icon } from '@iconify/react';
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';
import mailFilled from '@iconify/icons-ant-design/mail-filled';

import Logo from '../images/speakslogo-black.png'


const Footer = () => {

    
  const data = useStaticQuery(graphql`
  
  query FooterSocials{

    strapiGlobalSettings {
  
          SocialLinks {
            Facebook
            Instagram
            LinkedIn
        
      }
    }

  }
  
  
  
  `)

  const result = data.strapiGlobalSettings.SocialLinks



    return (
      <>
     <section className="footer">

        <div className="container">
            <div className="footer-socials">
                <h4>Follow us on our socials</h4>

                <div className="footer-links">
                <Link to={result.LinkedIn}target="_blank">
              <Icon icon={linkedinFilled}/>
            </Link>
            <Link to={result.Facebook} target="_blank">
              <Icon icon={facebookFilled}/>
            </Link>
            <Link to={result.Instagram} target="_blank">
              <Icon icon={instagramFilled}/>
            </Link>
   
            <a href="mailto:info@subtle-speaks.co.uk">
              <Icon icon={mailFilled}/>
            </a>
                </div>
            </div>
       

    {/* <div className="footer-nav-links">
      <ul>
        <li><a href="/#about">About Us</a></li>
        <li><a href="/#about">Projects</a></li>
        <li><a href="/#about">Research</a></li>
        <li><a href="/#about">Blog</a></li>
        <li><a href="/#about">Contact</a></li>
      </ul>
    </div> */}
      <img src={Logo} alt="" style={{margin: '0 auto'}}/>
     <span>Subtle Speaks is a registered CIC (Community Interest Company) based in the UK. Company No: 12166801. Built by <a href="https://penfolddesign.co.uk" style={{color: 'inherit', textDecoration: 'underline'}}>Penfold Design.</a> </span>
     </div>
     </section>

     </>
    )
}

export default Footer
