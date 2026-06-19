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
                    My name is Albion Shoshi and I'm from Pittsburgh, PA. I'm a recent Penn State graduate
                    (Class of 2026) with a B.S. in Data Science and a minor in Math.
                </p>

                <p className="aboutText">
                    I focus on creating AI projects because I'm driven by the challenge of automating and optimizing
                    things I'm interested in. I love working with statistical and mathematical models and thrive working
                    on projects that directly can improve peoples lives. With a background in Machine Learning and a proven
                    track record of using storytelling to drive impactful results, I am eager to leverage my skills to
                    contribute and blend data-driven insights with compelling narratives.
                </p>

                <p className="aboutText">
                    I've worked on a wide range of Data Science and AI projects. I built a face-recognition app that reads
                    your emotion and generates a custom Spotify playlist to match it, and a machine-learning pipeline that
                    digs into advanced NBA analytics to identify the league's potential future stars. More recently I
                    developed Warden, a budgeting app that uses Facebook Prophet to forecast a user's long-term finances
                    and track investments, and I've trained reinforcement-learning agents including a chess bot capable
                    of beating rated opponents on Chess.com. Across these projects I've worked with everything from XGBoost
                    and SVMs to deep neural networks, while also learning to collaborate on teams that ship real features by
                    grounding decisions in user research and feedback. Building real-world AI applications has shown me how
                    deeply data shapes the products people rely on, and it drives me to advocate for thoughtful,
                    user-centric, and safe product development.

                </p>

                <p className="aboutText">
                    Outside of work, I love being outdoors. I'm always hiking and exploring nature, especially places
                    I've never been before. I also stay active and constantly push myself physically, training in both
                    Muay Thai and Brazilian Jiu-Jitsu.

                </p>
            </div>
        </div>
    );
}

export default About;