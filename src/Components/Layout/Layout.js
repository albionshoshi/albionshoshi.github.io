import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav.js";
import "./Layout.css"
const Layout = () => {
    return(
    <div className="background">
        <Nav/>
        <Outlet />
    </div>
    );
};

export default Layout;