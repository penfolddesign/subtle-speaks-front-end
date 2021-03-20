import React , {useEffect} from "react"


import Layout from "../components/layout"
import LandingHero from '../components/landinghero'
import About from '../components/about'
import Projects from "../components/projects"
import SocialSection from "../components/social"
import Partners from "../components/partners"
import ResearchSection from "../components/research"
import SEO from "../components/seo"
import IndexBlog from "../components/indexblog"

import Aos from 'aos'
import "aos/dist/aos.css";


const IndexPage = () => {

  useEffect(() =>{
    Aos.init({

      once: true
    });

  }, []);

  return(<>
    <head>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
    </head>
    <Layout>
      <SEO  title="Home"/>
      <LandingHero/>
      <Projects/>
    

  
 
      <ResearchSection/>
      <About/>
      <IndexBlog/>
      {/* <SocialSection/> */}
    </Layout>
    </>
  )
}

export default IndexPage
