import { Link } from "gatsby"
import React, {useState, useEffect} from 'react'

import Logo from '../images/speakslogo-black.png'

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

return(


<header className={ fixedNav ? 'main-navigation-header scroll-on' : 'main-navigation-header'}>
    <div className="container header-container">
       <a href="/">
       <img src={Logo} alt="Subtle Speaks CIC Black Logo"/>
       </a>
       <div className="navigation-links mobile-hide">
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/#research">Research</a>
          <a href="/blog">Blog</a>
          <div className="button-container nav-cta">
              <a href="/contact">Get in Touch</a>
          </div>
       </div>
    </div>
  </header>


  )
}



export default Header
