import './Home.css';

function Home() {
    return (
        <div className="homeBod">
            <div className="intro-section">
                <div className="profile-container">
                    <img className="profile-picture" src="/Albi.jpeg" alt="Albion's Profile" />
                </div>

                <div className="intro-text">
                    <h1 className="home_about">Hi, I'm Albion.</h1>
                    <p className="about_school">
                        A rising senior attending Penn State University majoring in Data Science in the College of Engineering
                    </p>
                    <p className="home_aboutMe">
                        I'm an aspiring Developer interested in all ways creating. From making latte
                        art in the morning to game development and even making this website,
                        I'm interested in all ways to release my creativity.
                    </p>
                </div>
            </div>

            <div className="skills-section">
                <h2 className="section-title">Programming Languages</h2>
                <div className="skills-grid">
                    <div className="skill-item">
                        <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java"/>
                        <p>Java</p>
                    </div>
                    <div className="skill-item">
                        <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++"/>
                        <p>C++</p>
                    </div>
                    <div className="skill-item">
                        <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#"/>
                        <p>C#</p>
                    </div>
                    <div className="skill-item">
                        <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" alt="R"/>
                        <p>R</p>
                    </div>
                    <div className="skill-item">
                        <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python"/>
                        <p>Python</p>
                    </div>
                    <div className="skill-item">
                        <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript"/>
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>

            <div className="skills-section">
                <h2 className="section-title">Frameworks & Tools</h2>
                <div className="skills-grid">
                    <div className="skill-item">
                        <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React"/>
                        <p>React</p>
                    </div>
                    <div className="skill-item">
                        <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js"/>
                        <p>Node.js</p>
                    </div>
                    <div className="skill-item">
                        <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git"/>
                        <p>Git</p>
                    </div>
                    <div className="skill-item">
                        <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" alt="Unity"/>
                        <p>Unity</p>
                    </div>
                </div>
            </div>

            <div className="skills-section">
                <h2 className="section-title">Relevant Coursework</h2>
                <div className="courses-grid">
                    <div className="course-item">Data Structures & Algorithms</div>
                    <div className="course-item">Machine Learning</div>
                    <div className="course-item">Database Management</div>
                    <div className="course-item">Statistical Methods</div>
                    <div className="course-item">Software Engineering</div>
                    <div className="course-item">Artificial Intelligence</div>
                </div>
            </div>
        </div>
    );
}

export default Home;