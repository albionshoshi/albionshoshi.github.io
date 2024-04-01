import React from 'react';
import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.js';
import About from './Components/About';
import Contact from './Components/Contact';
import Layout from './Components/Layout';

function App() {
    return (
		<div className="App">
        	<BrowserRouter>
                <Routes>
                    <Route path="index.html" element={<Navigate to="/"/>}/>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
        	</BrowserRouter>
		</div>
    );
}
export default App;

