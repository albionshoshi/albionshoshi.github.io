import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav.js";
import "./Layout.css"
import SkyView from "../SkyView/SkyView.js";
const Layout = () => {
    return(
    <div className="background">
        <SkyView/>
        <Nav/>
        <Outlet />
    </div>
    );
};

export default Layout;