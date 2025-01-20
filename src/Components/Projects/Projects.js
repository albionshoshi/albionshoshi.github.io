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
            <p className="projectHeader">Some of my notable projects</p>

            <ProjectCard media={
                <ReactPlayer url="Neurosis.webm" controls={false} playing={true} loop={true} muted={true} width="100%" height="100%"/>
            } header4="Neurosis" description="Neurosis, a psychological horror game that takes place in our main characters brain. Our character goes into a journey of discovering who he truly is as he matches up with some of his greatest nightmares. Worked with Jeremy Chernin"/>

            <hr className="separator" />


            <ProjectCard media={
                <ReactPlayer url="ChessVidForWeb.mov" controls={false} playing={true} loop={true}/>
            } header4="Chess AI Agent" description="Created a chess AI with transitional
            functions able to play against 750 plus rated players. During 10 practice runs the agent was able to win 8 and draw 2 matches."/>

            <hr className="separator" />

            <ProjectCard header4= "Blackjack AI Agent" description={"Created a Blackjack AI agent implemented using Q-Learning. It plays as optimally as possible and achieves a win rate above 50%."}/>

            <hr className="separator" />

            <ProjectCard media = {
                <object data = "/NFLPredictions.pdf" type = "application/pdf" width = "100%" height = "500px">
                </object>
                } header4= "Predicting NFL Standings" description={"Trained a multiple linear regression model that predicts winning percentages of all NFL teams. We measured the success of our model from comparing our models results to the actual 2023 seasons results. "}/>
        </div>
    )
}

export default Projects