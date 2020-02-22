import React from 'react';

import '../artistportal.css'

export default () => (
    <>
      <div className="album">
        <div className="album_details">
          <p><i className="fas fa-sort-down"></i> Lingala Ya Yesu</p>
          <div className="flex_separator_one"></div>
          <p className="price_label">Ksh.500</p>
          <button className="album_action_edit">Edit</button>
          <button className="album_action">Remove</button>
        </div>
        <div className="song_details  ">
          <p><i className="far fa-play-circle"></i> Lingala Ya Yesu</p>
          <div className="flex_separator_one"></div>
          <span className="price_label">Tsh.100</span>
          <button className="song_action_edit">Edit</button>
          <button className="song_action">Remove</button>
        </div>
        <div className="song_details  ">
          <p><i className="far fa-pause-circle"></i> Uvumilivu</p>
          <div className="flex_separator_one"></div>
          <span className="price_label">Tsh.80</span>
          <button className="song_action_edit">Edit</button>
          <button className="song_action">Remove</button>
        </div>
        <div className="song_details  ">
          <p><i className="far fa-play-circle"></i> Nikujue Bwana</p>
          <div className="flex_separator_one"></div>
          <span className="price_label">Tsh.50</span>
          <button className="song_action_edit">Edit</button>
          <button className="song_action">Remove</button>
        </div>
        <div className="song_details  ">
          <p><i className="far fa-play-circle"></i> Wanajua</p>
          <div className="flex_separator_one"></div>
          <span className="price_label">Tsh.80</span>
          <button className="song_action_edit">Edit</button>
          <button className="song_action">Remove</button>
        </div>
        <div className="song_details  ">
          <p><i className="far fa-play-circle"></i> Waajabu Mungu</p>
          <div className="flex_separator_one"></div>
          <span className="price_label">Tsh.100</span>
          <button className="song_action_edit">Edit</button>
          <button className="song_action">Remove</button>
        </div>
        <div className="song_details  ">
          <p><i className="far fa-play-circle"></i> Mungu wa Eliya</p>
          <div className="flex_separator_one"></div>
          <span className="price_label">Tsh.100</span>
          <button className="song_action_edit">Edit</button>
          <button className="song_action">Remove</button>
        </div>
        <div className="song_details  ">
          <p><i className="far fa-play-circle"></i> Asiyeshindwa</p>
          <div className="flex_separator_one"></div>
          <span className="price_label">Tsh.80</span>
          <button className="song_action_edit">Edit</button>
          <button className="song_action">Remove</button>
        </div>
      </div>
    </>
)