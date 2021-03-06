import React from 'react'
import CCA from '../components/projects/cca'
import ACES from './projects/aces'
import EPC from './projects/epc'


const Projects = () => {




    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <h2>Services.</h2>

                <p className="description-text" style={{textAlign: "center", margin: "auto"}}>The services we offer are focused on community driven innovation that tackles & combats societal issues we see within the younger generation. We are pleased to introduce you to our 3 initiatives…
</p>              


                <div className="project-container">
                    <ACES/>
                    <EPC/>
                    <CCA/>

                </div>
          
                </div>
        </section>
    )
}

export default Projects
