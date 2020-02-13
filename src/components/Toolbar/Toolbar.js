import React from 'react';
import { Link } from 'gatsby';

import "./toolbar.css"

export default () => (
    <nav className="toolbar">
            <div className="toolbar_navs">
                <Link to="/" className="logo">MuzikiSoko</Link>
                <ul>
                    <li>
                        <Link to="/" className="nav_link">Home</Link>
                    </li>
                    <li>
                        <Link to="about" className="nav_link">About Us</Link>
                    </li>
                    <li>
                        <Link to="artists" className="nav_link">Artists</Link>
                    </li>
                    <li>
                        <Link to="albums" className="nav_link">Albums</Link>
                    </li>
                    <li>
                        <Link to="contact" className="nav_link">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="signin" className="nav_link">Log In</Link>
                    </li>
                </ul>
                <div className="flex" />
                <button className="toggler_btn">
                    <i className="fa fa-bars"></i>
                </button>
            </div>
    </nav>
)