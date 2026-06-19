import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav.js";
import Footer from "../Footer/Footer.js";
import "./Layout.css"
import SkyView from "../SkyView/SkyView.js";
const Layout = () => {
    return(
    <div className="background">
        <SkyView/>
        <Nav/>
        <main className="pageContent">
            <Outlet />
        </main>
        <Footer/>
    </div>
    );
};

export default Layout;
