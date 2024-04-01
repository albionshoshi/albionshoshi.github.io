import {Link, NavLink} from "react-router-dom"
import React from 'react'
import "./Nav.css"

const Nav = () =>{
    return (
        <header>
            <nav>
                <div className= "container">
                    <ul>
                        <li>
                            <NavLink className= "link" to= "/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className= "link" to= "/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className= "link" to= "/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className= "link" to= "/resume">
                                Resume
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;