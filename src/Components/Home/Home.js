import "./Home.css"
function Home() {
    return (
        <div>
            <h1 className="tit">Home</h1>
            <div className="description">
                <img className="pfp" src = "/zero.png"/>
                <p className="home_desc">
                    Hi my name is Albion Shoshi, I'm currently a sophmore at Penn State University
                    majoring in Data Sciences and a Minor in Statistics. I'm proficient in the
                    languages C++ and Java but I like to explore as many branches as I can in the
                    programming field.
                </p>
            </div>
        </div>
    );
}

export default Home;
