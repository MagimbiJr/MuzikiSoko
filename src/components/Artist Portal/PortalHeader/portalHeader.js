import React from 'react';
import Profile from '../../../assets/img/Otile Brown.jpg';

import '../artistportal.css'

export default () => (
    <>
      <div className="portal_header">
          <div className="greetings">
            <div className="profile">
              <img src={Profile} alt="Profile" />
            </div>
            <h5>Welcome Pitson</h5>
          </div>
          <div className="album_amount">
              <span>Albums</span>
              <div className="flex_separator"></div>
              <h2>4</h2>
          </div>
          <div className="songs_amount">
              <span>Songs</span>
              <div className="flex_separator"></div>
              <h2>27</h2>
          </div>
          <div className="downloads_amount">
              <span>Download</span>
              <div className="flex_separator"></div>
              <h2>1867</h2>
          </div>
          <div className="cash_amount">
              <span>Revenue</span>
              <div className="flex_separator"></div>
              <h2>Ksh.132,000</h2>
          </div>
      </div>
    </>
)