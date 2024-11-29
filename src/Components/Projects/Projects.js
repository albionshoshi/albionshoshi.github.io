import React from 'react'
import './Projects.css';
import ReactPlayer from "react-player"

const ProjectCard = ({description, header4, media}) => {
    return(
        <div className="projectCard">
            <div>
                <p className="header44">{header4}</p>
                {description}
            </div>
            {media}
        </div>
    )
}
function Projects() {
    return (
        <div>
            <h1 className="projectHeader">Some of my notable projects</h1>
            <ProjectCard media={
                <ReactPlayer url="ChessVID.mov" controls={false} playing={true} loop={true}/>
            } header4="Chess AI Agent" description="Created a chess AI with transitional
            functions able to play against 750 plus rated players"/>

            <hr className="separator" />

            <ProjectCard header4= "Tic-Tac-Toe AI Agent" description={"Created a Tic-Tac-Toe AI with transitional functions. It plays as optimally as possible given its position on the board"}/>

            <hr className="separator" />

            <ProjectCard media={
                <ReactPlayer url="Neurosis.webm" controls={false} playing={true} loop={true} muted={true} width="100%" height="100%"/>
            } header4="Neurosis" description="Neurosis, a psychological horror game that takes place in our main characters brain. Our character goes into a journey of discovering who he truly is as he matches up with some of his greatest nightmares"/>

            <hr className="separator" />

            <ProjectCard header4= "Lebron Vs. Jordan Statistcal Summary" description={"A dive deep and settling the goat debate by comparing head to head stats between Michael Jordan and LeBron James"}/>
        </div>
    )
}

export default Projects