import React, { useState, useEffect, useRef } from 'react';
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
                Some tools im comfortable with using.
            </p>
        </div>
    );
}

export default Home;
