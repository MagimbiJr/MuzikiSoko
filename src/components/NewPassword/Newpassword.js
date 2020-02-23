import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

import './newpassword.css';

export default () => (
    <>
    <Toolbar />
    <section className="new_pass">
        <h3>Please Enter Your New Password</h3>
        <div className="new_pass_block">
            <div className="new_pass_input">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="New Password" />
            </div>
            <div className="new_pass_input">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Confirm New Password" />
            </div>
            <button type="submit" className="new_pass_btn">Send</button>
        </div>
    </section>
    </>
)