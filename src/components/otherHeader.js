import { Link } from "gatsby"
import React, {useState, useEffect} from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import Logo from '../images/speakslogo-black.png'

import { Icon, InlineIcon } from '@iconify/react';
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';

import {AnchorLink} from 'gatsby-plugin-anchor-links'
import menuOutline from '@iconify/icons-eva/menu-outline';
import closeFill from '@iconify/icons-eva/close-fill';

const OtherHeader = () => {

  const [fixedNav, setFixedNav] = useState(false);
  const StickyNav = () =>{
      // console.log(window.scrollY)

      if(window.scrollY >= 70){
          setFixedNav(true);
      } else{
          setFixedNav(false);

      }
  }

  useEffect(()=>{
      window.addEventListener('scroll', StickyNav);
  })

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const data = useStaticQuery(graphql`
  
    query OtherIndexSocials{
  
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


return(


<header className='main-navigation-header other-header'>
<div className="container header-container">
       <AnchorLink to="/" stripHash>

       <img src={Logo} alt="Subtle Speaks CIC Black Logo"/>


       </AnchorLink>
    
    <div className="links-container">
    <div className="navigation-links mobile-hide">
                  <AnchorLink to="/#projects">Projects</AnchorLink>
                  <AnchorLink to="/#research">Research</AnchorLink>
                  <AnchorLink to="/blog">Blog</AnchorLink>
                  <AnchorLink to="/contact">Contact Us</AnchorLink>
              
    </div>
    <div className="mobile-menu desktop-hide" onClick={handleClick}>
        <Icon icon={ click ? closeFill : menuOutline} style={{color: click ? 'white' : 'black'}}/>
    </div>
    </div>
   
    </div>

    <div className={click ? 'mobile-menu-overlay menu-active' : 'mobile-menu-overlay'} onClick={closeMobileMenu}>
    <div className="mobile-menu-container">

      <ul className="mobile-menu-links">
        <li><Link to="/project-aces" onclick={closeMobileMenu}>ACES</Link></li>
        <li><Link to="/project-epc" onclick={closeMobileMenu}>EPC</Link></li>
        <li><Link to="/project-cca" onclick={closeMobileMenu}>CCA</Link></li>
        <li><Link to="/#research" onclick={closeMobileMenu}>RESEARCH</Link></li>
        <li><Link to="/blog" onclick={closeMobileMenu}>BLOG</Link></li>
        <li><Link to="/contact" onclick={closeMobileMenu}>CONTACT</Link></li>
        <li><Link to="/#about" onclick={closeMobileMenu}>ABOUT</Link></li>
      </ul>

      <div className="mobile-socials">
          <ul>
            <li><a href={result.Facebook} target="_blank"> <Icon icon={facebookFilled}/></a></li>
            <li><a href={result.Instagram} target="_blank"> <Icon icon={instagramFilled}/></a></li>
            <li><a href={result.LinkedIn} target="_blank"> <Icon icon={linkedinFilled}/></a></li>
          </ul>
      </div>
    </div>
    </div>
    
    
  </header>
  


  )
}



export default OtherHeader
