import './Home.css';
function Home() {
    return (
        <div className="homeBod">
            <p className="home_about">
                Hi, my name is Albion Shoshi.
            </p>

            <div className="home_about_blur">
                <p className="home_aboutMe">
                    I'm an aspiring Developer interested in all ways creating. From making latte
                    art in the morning to game development, I'm interested in all ways to release
                    my creativity.
                </p>
            </div>

            <p className="home_tools">
                Programming languages I'm comfortable with using.
            </p>
            <img className="tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
            <img className="tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
            <img className="tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
            <img className="tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" />


        </div>
    );
}

export default Home;
