import React from 'react'

const ProjectBanner = (props) => {
    return (
        <div class="project-banner" style={{ backgroundImage: `url(${props.background})` }}>
             <div className="project-info">
                 <h1>{props.title}</h1>
                 <p className="subheading">{props.description}</p>
             </div>
        </div>
    )
}

export default ProjectBanner
