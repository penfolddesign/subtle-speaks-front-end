/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from '../components/header'
import SEO from '../components/seo'
import Footer from "./footer"
const Layout = ({ children }) => {


  return (
    <div className="subtle-speaks-21 penfold-design gatsby-build">
      <Header/>
      <div className="main-page-container">
        
        {children}

      </div>
      <Footer/>
    </div>
  )
}


export default Layout
