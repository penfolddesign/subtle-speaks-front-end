import { Link } from "gatsby"
import React, {useState, useEffect} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Logo from '../images/speakslogo-black.png'

import { Icon, InlineIcon } from '@iconify/react';
import twitterOutlined from '@iconify/icons-ant-design/twitter-outlined';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';
import mailFilled from '@iconify/icons-ant-design/mail-filled';


import menuOutline from '@iconify/icons-eva/menu-outline';
import closeFill from '@iconify/icons-eva/close-fill';

const Header = () => {

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
  
  query IndexSocials{

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


<header className={ fixedNav ? 'main-navigation-header scroll-on' : 'main-navigation-header'}>
    <div className="container header-container">
       <a href="/">
       <img src={Logo} alt="Subtle Speaks CIC Black Logo"/>
       </a>
 
       <div className="button-container nav-cta mobile-hide">
              <a href="/contact">Get in Touch</a>
          </div>
    </div>
    <div className="links-container">
        <div className="container links-container-wrap">
        <div className="navigation-links mobile-hide">
                  <a href="/#about">About Us</a>
                  <a href="/#projects">Projects</a>
                  <a href="/#research">Research</a>
                  <a href="/blog">Blog</a>
              
              </div>
       
        <div className="navigation-socials mobile-hide">

            <Link to="https://twitter.com/subtlespeaks/" target="_blank">
              <Icon icon={twitterOutlined}/>
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

        <div className="mobile-menu" onClick={handleClick}>
       
        <div className="menu-icon">
        {click ? "CLOSE" : "MENU"} <Icon icon={click ? closeFill : menuOutline}/>
        </div>
        
        </div>

        </div>
    </div>

    <div className={click ? "mobile-container menu-active" : "mobile-container"} onClick={handleClick}>
        <div className="mobile-menu-links">

                  <a href="/#about">About Us</a>
                  <a href="/#projects">Projects</a>
                  <a href="/#research">Research</a>
                  <a href="/blog">Blog</a>
                  <a href="/contact">Contact</a>
              
        </div>
    </div>
  </header>
  


  )
}



export default Header
