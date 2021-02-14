import React from 'react'

const ProjectBoxContainer = (props) => {
    return (
        <>
        <div className="project-boxes" style={{'--bg-color': `${props.project}`}}>
            {props.children}
        </div>
        </>
    )
}

export default ProjectBoxContainer
