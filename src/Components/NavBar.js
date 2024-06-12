import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/timer">Timer</Link></li>
                <li><Link to="/clock">World Clock</Link></li>
            </ul>
        </>
    )
}

export default NavBar