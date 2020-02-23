import React from 'react'; 
import Toolbar from '../Toolbar/Toolbar';

import './recover.css';

export default () => (
    <>
    <Toolbar />
    <section className="recover">
        <h3>Have a Cup of coffee and Relax</h3>
        <div className="recover_block">
            <div className="recover_input">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Please enter your Email" />
            </div>
            <button type="submit" className="recover_btn">Send</button>
        </div>
    </section>
    </>
)