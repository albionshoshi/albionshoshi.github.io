import './Home.css';

function Home() {
    return (
        <div className="homeBod">
            <p className="home_about">
                Hi, I'm Albion.
                <p className="home_npm about_school">
                    A rising senior attending Penn State University majoring in Data Science in the College of Engineering
                </p>
            </p>

            <div className="profile-container">
                <img className="profile-picture" src="/Albi.jpeg" alt="Albion's Profile" />
            </div>

            <div className="linedUp">
                <div className="home_about_blur">
                    <p className="home_aboutMe">
                        I'm an aspiring Developer interested in all ways creating. From making latte
                        art in the morning to game development and even making this website,
                        I'm interested in all ways to release my creativity.
                    </p>
                </div>
            </div>


        </div>
    );
}

export default Home;
