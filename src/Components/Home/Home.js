import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
    const fullText = "Hi my name is Albion Shoshi, I'm a rising junior attending Penn State University majoring in Data Sciences and have a passion for creating.";
    const [text, setText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText((currentText) => currentText + fullText.charAt(index - 1));
            index++;
            if (index === fullText.length) clearInterval(intervalId);
        }, 100);

        return () => clearInterval(intervalId);
    }, [fullText]);

    return (
        <div className="homeBod">
            <div>
                <h1 className="tit">Home</h1>
                <div className="description">
                    <img className="pfp" src="/goat.jpg" alt="Profile"/>
                    <p className="home_desc">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
