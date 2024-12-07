import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/yourusername' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
        { name: 'Itch', url: 'https://itch.com/yourusername' }
    ];

    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__copyright">
                    © {new Date().getFullYear()} Mohammed Bajaman
                </p>
                
                <div className="footer__links">
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Work</Link>
                    <Link to="/about">About</Link>
                </div>

                <div className="footer__social-links">
                    {socialLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
