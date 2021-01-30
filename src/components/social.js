import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {Link} from 'gatsby'
import SocialBackground from '../images/socialbackground.jpg'

import { Icon, InlineIcon } from '@iconify/react';
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
import facebookFilled from '@iconify/icons-ant-design/facebook-filled';

const SocialSection = () => {
    
    const data = useStaticQuery(graphql`
    
    query SocialQuery {
        allStrapiGlobalSettings {
          edges {
            node {
              SocialLinks {
                Facebook
                Instagram
                LinkedIn
              }
            }
          }
        }
      }
      

    
    
    
    
    `)

    
    const social = data.allStrapiGlobalSettings.edges



    return (
        <section className="social-banner" style={{ backgroundImage: `url(${SocialBackground})` }}>
            <div className="social-content">
                <div>
                    <h3>Be the ace in a deck of cards</h3>
                    <p>Follow us on our socials to keep up to date on the latest news.</p>
                </div>
                
                

                {social.map(link => (
                <div className="social-links">
              
                    <Link to={link.node.SocialLinks.Instagram}>
                    <div className="link">
                    <Icon icon={instagramFilled} style={{color: '#FFF', fontSize: '64px'}} />
                        <p>@subtlespeaks</p>
                    </div>
                    </Link>
                    <Link to={link.node.SocialLinks.LinkedIn}>
                    <div className="link">
                    <Icon icon={linkedinFilled} style={{color: '#FFF', fontSize: '64px'}} />
                        <p>/subtlespeaks</p>
                    </div>
                    </Link>
                    <Link to={link.node.SocialLinks.Facebook}>
                    <div className="link">
                    <Icon icon={facebookFilled} style={{color: '#FFF', fontSize: '64px'}} />
                        <p>/subtlespeaks</p>
                    </div>
                    </Link>
              
                </div>
                   ))}  
            </div>
        </section>
    )
}

export default SocialSection
