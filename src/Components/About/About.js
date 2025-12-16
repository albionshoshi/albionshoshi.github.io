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
                    I focus on creating AI projects because I'm driven by the challenge of [what motivates you].
                    In [year], I [major achievement or project]. [Describe what you built/accomplished and the
                    technologies or skills you used].
                </p>

                <p className="aboutText">
                    In [year], I expanded my work by [next achievement or project]. For this project, I [describe
                    what you developed - tools, models, features, etc.]. I also built features such as [list key
                    features or accomplishments].
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