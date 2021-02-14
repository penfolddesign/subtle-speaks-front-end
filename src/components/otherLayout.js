/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import OtherHeader from '../components/otherHeader'
import SEO from '../components/seo'
import Footer from "./footer"
const OtherLayout = ({ children }) => {


  return (
    <div className="subtle-speaks-21 penfold-design gatsby-build">
      <OtherHeader/>
      <div className="main-page-container">
        
        {children}

      </div>
      <Footer/>
    </div>
  )
}


export default OtherLayout
