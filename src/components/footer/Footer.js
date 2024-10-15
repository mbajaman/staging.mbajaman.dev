import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div id='footer'>
            Footer
        </div>
    )
}

export default Footer