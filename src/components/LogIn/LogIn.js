import React from 'react';
import { Link } from 'gatsby';

import './login.css';

export default () => (
    <section className="login">
        <div className="login_block">
           <div className="input">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="input">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />  
            </div>
            <button className="login_btn" type="submit">Log In</button>
            <Link to="recover">Forgot Password</Link>
            <div className="signup_link">
                <p>don't have an account?</p>
                <Link to="signup">Create Account</Link>
            </div>
        </div>
    </section>
)