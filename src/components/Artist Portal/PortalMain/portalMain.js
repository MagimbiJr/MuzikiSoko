import React from 'react';
import { Link } from 'gatsby';
import Album from '../Album/Album'

import '../artistportal.css'

export default () => (
    <div className="main_portal">
        <h2>My Music</h2>
        <div className="type_action">
            <span>Albums</span>
            <span>Singles</span>
            <Link to="/add music" className="add_music_btn">Add Music <i className="fas fa-plus"></i></Link>
        </div>
        <Album />
    </div>
)