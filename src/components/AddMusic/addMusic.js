import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

import './addMusic.css';

export default () => (
    <>
    <Toolbar />
    <section className="add_music">
        <h3>Add Music</h3>
        <div className="add_music_block">
        <form>
            <h4>Create Album</h4>
            <div className="add_music_input">
                <i className="fas fa-compact-disc"></i>
                <input type="text" placeholder="Album Name" />
            </div>
            <div className="add_music_input">
                <i className="fas fa-calendar"></i>
                <input type="text" placeholder="Month of Release" />
            </div>
            <div className="add_music_input">
                <i className="fas fa-calendar"></i>
                <input type="text" placeholder="Year of Release" />
            </div>
            <div className="add_music_input">
                <i className="fas fa-music"></i>
                <input type="text" placeholder="Number of Songs" />
            </div>
            <div className="add_music_input">
                <i className="fas fa-dollar-sign"></i>
                <input type="text" placeholder="Album Price" />
            </div>
            </form>
            <button type="submit" className="submit_btn">Submit</button>
        </div>
    </section>
    </>
)