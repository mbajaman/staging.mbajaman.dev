import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'HOME' },
        { path: '/portfolio', label: 'WORK' },
        { path: '/about', label: 'ABOUT' }
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className='navbar'>
            <div className='navbar__desktop'>
                <Link className='navbar__brand' to='/'>
                    <span className='navbar__logo'>MOHAMMED BAJAMAN</span>
                </Link>
                
                <div className='navbar__menu'>
                    {navItems.map((item) => (
                        <Link 
                            key={item.label}
                            to={item.path}
                            className='navbar__menu-item'
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>

            <div className='navbar__mobile'>
                <Link className='navbar__brand' to='/'>
                    <span className='navbar__logo'>MB</span>
                </Link>

                <button 
                    className={`navbar__hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`navbar__mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                {/* <Link className='nav__desktop-logo' to='/'>
                    <img alt='Logo' src={Logo} />
                </Link> */}
            </div>
        </div>
        </nav>
    )
}

export default Navbar