import React from 'react';
import './About.css';

function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutHeader">
                <h1 className="aboutTitle">About Me</h1>
            </div>

            <div className="aboutContent">
                <p className="aboutText">
                    My name is Albion Shoshi and I'm from Pittsburgh, PA. I'm a senior at Penn State majoring in
                    Data Science with a minor in Math.
                </p>

                <p className="aboutText">
                    I focus on creating AI projects because I'm driven by the challenge of automating and optimizing
                    things I'm interested in. I love working with statistical and mathematical models and thrive working
                    on projects that directly can improve peoples lives. With a background in Machine Learning and a proven
                    track record of using storytelling to drive impactful results, I am eager to leverage my skills to
                    contribute and blend data-driven insights with compelling narratives.
                </p>

                <p className="aboutText">
                    I have worked on numerous Data Science projects ranging from a face recognition app that delivers you
                    a custom spotify playlist based off of the detected emotion displayed, to studying advanced analytics
                    of NBA players and creating a ML pipeline to figure out potential future stars in the league.
                    I have also done projects where I learned how to work with teams that delivered results by conducting
                    thorough user research and launching new technical features after receiving user feedback. My experiences
                    from developing real world AI applications and understanding the evolution of data sets will allow
                    me to effectively advocate for user-centric product development and safety.

                </p>

                <p className="aboutText">
                    Outside of my work I enjoy doing things outdoors. I am always going on hikes and exploring nature
                    ,especially in places I've never been before. I also always keep myself active and challenged myself
                    this year to start training in Muay Thai.

                </p>
            </div>
        </div>
    );
}

export default About;