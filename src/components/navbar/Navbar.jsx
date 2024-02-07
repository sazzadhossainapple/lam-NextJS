import React from 'react';
import Links from './links/Links';
import './navbar.css';

function Navbar() {
    return (
        <div className="container">
            <div>Logo</div>
            <div>
                <Links />
            </div>
        </div>
    );
}

export default Navbar;
