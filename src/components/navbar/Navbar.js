import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='nav'>
            <div className='nav__desktop'>
                <Link className='nav__title-link' to='/'>
                    <b>MOHAMMED BAJAMAN</b>
                </Link>
                <div className='nav__desktop-menu'>
                    <Link to='/' spy="true" smooth="true" offset={-50} duration={500} className='nav__desktop-menu-item'>HOME</Link>
                    <Link to='/portfolio' spy="true" smooth="true" offset={-50} duration={500} className='nav__desktop-menu-item'>PORTFOLIO</Link>
                    <Link to='/' spy="true" smooth="true" offset={-50} duration={500} className='nav__desktop-menu-item'>BLOG (Coming Soon)</Link>
                </div>



                {/* <Link className='nav__desktop-logo' to='/'>
                    <img alt='Logo' src={Logo} />
                </Link> */}
            </div>

            <div className='nav__mob'>
            <svg className={showMenu ? 'nav__mob-button-svg menu-open' : 'nav__mob-button-svg'} onClick={()=>setShowMenu(!showMenu)}>
                <line x1="0" y1="50%" x2="100%" y2="50%" className="top" shapeRendering="crispEdges" />
                <line x1="0" y1="50%" x2="100%" y2="50%" className="middle" shapeRendering="crispEdges" />
                <line x1="0" y1="50%" x2="100%" y2="50%" className="bottom" shapeRendering="crispEdges" />
            </svg>

            <Link className='nav__mob-logo' to='/'>
                {/* <img alt='Logo' src={Logo} /> */}
            </Link>
            
            <div className={`nav__mob-items${showMenu ? ' active' : ''}`}>
                <Link to='/' spy="true" smooth="true" offset={-50} duration={500} className ='nav__mob-menu-item' onClick={()=>setShowMenu(false)}>HOME</Link>
                <Link to='/portfolio' spy="true" smooth="true" offset={-50} duration={500} className ='nav__mob-menu-item' onClick={()=>setShowMenu(false)}>WORK</Link>
            </div>
            </div>
        </nav>
    )
}

export default Navbar