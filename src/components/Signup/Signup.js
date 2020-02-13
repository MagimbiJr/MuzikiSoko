import React from 'react';
import { Link } from 'gatsby';

import './signup.css'

export default () => (
    <section className="signup">
        <h2>Sign Up</h2>
        <div className="signup_block">
            <div className="signup_input">
                <i className="fas fa-user"></i>
                <input type="name" placeholder="First Name" />
            </div>
            <div className="signup_input">
                <i className="fas fa-user"></i>
                <input type="name" placeholder="Last Name" />
            </div>
            <div className="signup_input">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
            </div>
            <div className="signup_input">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
            </div>
            <div className="signup_input">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="signup_input_p">
            <input type="checkbox" className="checkbox" />
            <p>I agree <Link to="/">Terms and Conditions</Link> and <Link to="/">Privacy Policy</Link></p>
            </div>
            <button type="submit" className="signup_btn">Sign Up</button>
        </div>
    </section>
)