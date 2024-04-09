import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}

function Home() {
    const fullText = "Hi my name is Albion Shoshi";
    const [text, setText] = useState("");

    useEffect(() => {
        let index = -1;
        const interval = setInterval(() => {
            index++;
            setText(txt => txt.concat(fullText.charAt(index)));
            if (text.length === fullText.length) return;
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="homeBod">
            <div>
                <img className="pfp" src="/goat.jpg" alt="Profile"/>
                <div className="description">
                    <p className="home_desc">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
