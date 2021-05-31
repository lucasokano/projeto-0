import React from 'react'
import './index.css'
import {Link} from "react-router-dom";

const Navbar = props => {
    return(
        <navbar className="Nav">
            <a href="www.google.com">
            <img src=""></img>
            </a>

            <ul>
                <li>
                <Link to="/Home">Home</Link>
                </li>

                <li>
                <Link to="/About">About</Link>
                </li>

                <li>
                <Link to="/Imagem">Imagem</Link>
                </li>
            </ul>
        </navbar>
    )
    
}

export default Navbar