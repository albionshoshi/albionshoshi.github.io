import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home.js'
import Layout from './Components/Layout'
//                     <Route path="contact" element={<Contact />} />
//                    <Route path="*" element={<NoPage />} />

function App() {
  return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
