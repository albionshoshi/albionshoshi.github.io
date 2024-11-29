import React from 'react';
import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';
import Resume from "./Components/Resume/Resume";

function App() {
    return (
		<div className="App">
        	<BrowserRouter>
                <Routes>
                    <Route path="index.html" element={<Navigate to="/"/>}/>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
                    </Route>
                </Routes>
        	</BrowserRouter>
		</div>
    );
}
export default App;

