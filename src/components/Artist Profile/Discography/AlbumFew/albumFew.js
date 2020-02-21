import React from 'react';

export default () => (
    <>
      <div className="album_details third">
          <p><i className="fas fa-sort-down"></i> Hakuna Mungu Kama Wewe</p>
          <div className="flex_separator_one"></div>
          <p className="price_label">Ksh.500</p>
          <button className="album_action">Buy Album</button>
          <button className="album_action disabled" disabled>Download</button>
      </div>
      <div className="song_details  ">
        <p><i className="far fa-play-circle"></i> Nani Kama Wewe</p>
        <div className="flex_separator_one"></div>
        <span className="price_label">Tsh.100</span>
        <button className="song_action">Play</button>
        <button className="song_action disabled" disabled>Download</button>
      </div>
      <div className="song_details  ">
        <p><i className="far fa-play-circle"></i> Wastahili</p>
        <div className="flex_separator_one"></div>
        <span className="price_label">Tsh.100</span>
        <button className="song_action">Play</button>
        <button className="song_action disabled" disabled>Download</button>
      </div>
      <div className="song_details  ">
        <p><i className="far fa-play-circle"></i> All My Days</p>
        <div className="flex_separator_one"></div>
        <span className="price_label">Tsh.80</span>
        <button className="song_action">Play</button>
        <button className="song_action disabled" disabled>Download</button>
      </div>
      <div className="song_details  ">
        <p><i className="far fa-play-circle"></i> All My Days</p>
        <div className="flex_separator_one"></div>
        <span className="price_label">Tsh.80</span>
        <button className="song_action">Play</button>
        <button className="song_action disabled" disabled>Download</button>
      </div>
    </>
)