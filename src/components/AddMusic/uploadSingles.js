import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

export default () => (
    <>
      <Toolbar />
      <section className="add_music">
        <h3>Add Music</h3>
        <div className="add_music_block">
        <form>
            <h4>Upload Singles</h4>
            <div className="add_music_input">
                <i className="fas fa-compact-disc"></i>
                <input type="text" placeholder="Track Name" />
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
                <i className="fas fa-dollar-sign"></i>
                <input type="text" placeholder="Album Price" />
            </div>
            <div className="add_music_input">
                <input type="file" placeholder="Number of Songs" />
            </div>
            </form>
            <button type="submit" className="submit_btn">Submit</button>
        </div>
      </section>
    </>
)