import React from 'react'
import './Projects.css';
import ReactPlayer from "react-player"

const ProjectCard = ({description, header, media, tech, github}) => {
    return(
        <div className="projectCard">
            <div className="projectContent">
                <h2 className="projectTitle">{header}</h2>
                <p className="projectDescription">{description}</p>
                {tech && (
                    <div className="techStack">
                        <span className="techLabel">Tech Stack:</span>
                        <div className="techTags">
                            {tech.map((technology, index) => (
                                <span key={index} className="techTag">{technology}</span>
                            ))}
                        </div>
                    </div>
                )}
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="githubLink">
                        View on GitHub →
                    </a>
                )}
            </div>
            {media && (
                <div className="projectMedia">
                    {media}
                </div>
            )}
        </div>
    )
}

function Projects() {
    return (
        <div className="projectsContainer">
            <div className="projectsHeader">
                <h1 className="projectsTitle">My Projects</h1>
                <p className="projectsSubtitle">A collection of my notable work in game development, AI, and data science</p>
            </div>

            <div className="projectsList">
                <ProjectCard
                    media={
                        <div className="singleMedia">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{width: '100%', height: 'auto', borderRadius: '10px'}}
                            >
                                <source src="/Neurosis.webm" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    }
                    header="Neurosis"
                    description="Neurosis is a psychological horror game that takes place in our main character's brain. The protagonist embarks on a journey of self-discovery while confronting his greatest nightmares. The main character's dream soon turns into a nightmare as he’s faced with challenges and decisions he hasn’t yet to overcome from his past. He is then again faced with these challenges and is forced to relive his past experiences to grow from his past mistakes. This immersive experience explores themes of identity and fear through atmospheric gameplay and narrative-driven design."
                    tech={["Unity", "C#", "Game Design"]}
                />

                <ProjectCard
                    media={
                        <div className="singleMedia">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{width: '100%', height: 'auto', borderRadius: '10px'}}
                            >
                                <source src="/ChessVid.mov" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    }
                    header="Chess AI Agent"
                    description="Developed an intelligent chess AI bot utilizing transition functions and strategic algorithms capable of competing against 750+ rated players. In Reinforcement Learning, transition models describe the environment's dynamics and define the probability of transitioning to a new state from its current state. This model is crucial because it is used to predict future states and plan actions to maximize rewards. In the example video I show a 750 rated bot playing against my bot. Through rigorous testing across 10 practice matches, the agent demonstrated exceptional performance with 8 wins and 2 draws, showcasing robust decision-making and tactical planning capabilities.
"
                    tech={["Python", "AI", "Game Theory"]}
                />

                {/* Do this later
                <ProjectCard
                    header="Blackjack AI Agent"
                    description="Implemented a reinforcement learning agent using Q-Learning to play Blackjack optimally. The agent learns optimal betting and playing strategies through thousands of simulated games, consistently achieving a win rate above 50% by mastering probability-based decision making and strategic card counting techniques."
                    tech={["Python", "Q-Learning", "Reinforcement Learning"]}
                />
                */}

                <ProjectCard
                    media={
                        <div className="pdfPreview">
                            <div className="pdfIcon">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                            </div>
                            <h3>Research Paper</h3>
                            <p>Predicting on NBA players</p>
                            <a href="/NBA_Predictions.pdf" target="_blank" rel="noopener noreferrer" className="viewPdfButton">
                                View Paper
                            </a>
                        </div>
                    }
                    header="NBA Predictions Research Paper"
                    description="The research paper was constructed to explore and recommend new machine learning approaches when it comes to evaluating young NBA talent. We want to find a better way of finding the potential of collegiate basketball and young NBA players and what kind of future they could have in the NBA. While the model is not a definitive solution, it generates an analytical baseline to judge players opposed to opinion. Our methodology started with defining star potential and created 5 different categories of clusters ranging from superstar to minimal impact bench player. We fit all current NBA players from the last 20 years into these clusters based on statistical metrics. We then used Supervised Learning Models in Logistic Regression, XGBoost, and Random Forest to predict on the young players and how likely they are to fit into a certain cluster. "
                    tech={["Python", "Machine Learning", "Statistical Analysis"]}
                />
                <ProjectCard
                    media={
                        <div className="pdfPreview">
                            <div className="pdfIcon">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                            </div>
                            <h3>Research Poster</h3>
                            <p>NFL Standings Prediction Analysis</p>
                            <a href="/NFL_POSTER.pdf" target="_blank" rel="noopener noreferrer" className="viewPdfButton">
                                View Poster
                            </a>
                        </div>
                    }
                    header="Predicting NFL Standings"
                    description="Engineered a multiple linear regression model to forecast NFL team winning percentages with high accuracy based off of previous NFL season statistics. The project was a group project featured with research partners Alex Bechakas and Gavin Crowley. The model analyzes various performance metrics and historical data to predict season outcomes. The motivation for this project lies in a shared passion for the NFL and in the curiosity to explore how key metrics such as point differentials, total yards, and defensive statistics contribute to a team’s performance over a season. We validated the model's effectiveness by comparing predictions against actual 2023 season results, demonstrating strong predictive capabilities."
                    tech={["R", "Machine Learning", "Statistical Analysis"]}
                />
            </div>
        </div>
    )
}

export default Projects