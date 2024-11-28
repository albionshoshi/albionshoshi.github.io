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
                <ReactPlayer url="ChessVID.mov" controls={false} playing={true}/>
            } header4="Chess AI Agent" description="Created a chess AI with transitional
            functions able to play against 750 plus rated players"/>
            <ProjectCard header4= "Tic-Tac-Toe AI Agent" description={"Created a Tic-Tac-Toe AI with transitional functions. It plays as optimally as possible given its position on the board"}/>
        </div>
    )
}

export default Projects