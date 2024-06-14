import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <ul className='navbar'>
                <li><Link to="/"><button>Home</button></Link> </li>
                <li><Link to="/timer"><button>Timer</button></Link></li>
                <li><Link to="/clock"><button>World Clock</button></Link></li>
            </ul>
        </>
    )
}

export default NavBar