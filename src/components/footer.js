import React from 'react'
import {Link} from 'gatsby'
import {useStaticQuery, graphql} from 'gatsby'
import { Icon, InlineIcon } from '@iconify/react';
import twitterOutlined from '@iconify/icons-ant-design/twitter-outlined';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';
import mailFilled from '@iconify/icons-ant-design/mail-filled';


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
     <section className="footer">

        <div className="container">
            <div className="footer-socials">
                <h4>Follow us on our socials</h4>

                <div className="footer-links">
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
            </div>
            <span>Subtle Speaks LTD.is a registered Community Interest Company (CIC). </span>
        </div>

     </section>
    )
}

export default Footer
