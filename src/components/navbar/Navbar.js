import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'HOME' },
        { path: '/portfolio', label: 'WORK' },
        { path: '/about', label: 'ABOUT' }
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className='navbar'>
            <div className='navbar__desktop'>
                <Link className='navbar__brand' to='/'>
                    <span className='navbar__logo'>MOHAMMED BAJAMAN</span>
                </Link>
                
                <div className='navbar__menu'>
                    {navItems.map((item) => (
                        <NavLink 
                            key={item.label}
                            to={item.path}
                            className={({ isActive }) => 
                                `navbar__menu-item ${isActive ? 'active' : ''}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>

            <div className='navbar__mobile'>
                <button 
                    className={`navbar__hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <Link className='navbar__brand' to='/'>
                    <span className='navbar__logo'>MB</span>
                </Link>

                <div 
                    className={`navbar__mobile-overlay ${isMenuOpen ? 'active' : ''}`}
                    onClick={handleNavClick}
                ></div>

                <div className={`navbar__mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <NavLink 
                            key={item.label}
                            to={item.path}
                            className={({ isActive }) => 
                                `navbar__mobile-item ${isActive ? 'active' : ''}`
                            }
                            onClick={handleNavClick}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar