import React from 'react'
import Img from 'gatsby-image'
import Markdown from 'react-markdown'
const ProjectMain = (props) => {

    return (
        <div className="project-item-container">
            <div className="project-image">
                <Img fluid={props.image}/>
                {props.source &&
                
                <video controls>

                    <source src={props.source} type="video/mp4"/>

                </video>
                
                }
                 
            </div>

            <div className="project-content">
                <h3>{props.title}</h3>
                <Markdown source={props.description} escapeHtml={false}/>
            </div>
        </div>
    )
}

export default ProjectMain
