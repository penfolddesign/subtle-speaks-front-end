import React from 'react'
import Img from 'gatsby-image'
import Markdown from 'react-markdown'
const ProjectMain = (props) => {

    return (
        <div className="project-item-container">
            <div className="project-image">
               <img src={props.image} alt=""/>
                
            </div>

            <div className="project-content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ProjectMain
