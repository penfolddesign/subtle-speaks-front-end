import React from 'react'

const ProjectBox = (props) => {
    return (
        <div className="box" style={{backgroundColor: `${props.color}`}}>
            <p>{props.content}.</p>
        </div>
    )
}

export default ProjectBox
