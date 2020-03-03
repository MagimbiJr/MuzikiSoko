import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
 
export default () => (
    <>
    <Toolbar />
    <section className="add_music">
        <h3>Add Music</h3>
        <div className="add_music_block">
            <h5>Upload Lingala Ya Yesu Album </h5>
            <h4>Upload Songs</h4>
            <textarea>Browse multiple or Drag songs Here</textarea>
            <div className="upload_progress">
                <div className="track">
                    <h5>Track Name</h5>
                    <p>Track 1</p>
                    <p>Track 2</p>
                    <p>Track 3</p>
                    <p>Track 4</p>
                </div>
                <div className="status">
                    <h5>Status</h5>
                    <p>Completed</p>
                    <p>Completed</p>
                    <p>Uploading... 64%</p>
                    <p>Uploading... 23%</p>
                </div>
                <div className="price">
                    <h5>Pricing</h5>
                    <p>300Tsh</p>
                    <p>300Tsh</p>
                    <p>300Tsh</p>
                    <p>300Tsh</p>
                </div>
                <div className="action">
                    <h5>Action</h5>
                    <button className="action_btn"><i className="fas fa-times"></i></button>
                    <button className="action_btn"><i className="fas fa-times"></i></button>
                    <button className="action_btn"><i className="fas fa-times"></i></button>
                    <button className="action_btn"><i className="fas fa-times"></i></button>
                </div>
            </div>
            <button type="submit" className="submit_btn">Save</button>
        </div>
    </section>
    </>
)