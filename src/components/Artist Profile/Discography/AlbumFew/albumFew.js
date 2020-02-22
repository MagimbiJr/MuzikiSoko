import React from 'react';

export default () => (
    <>
      <div className="album_details third">
      <div className="btn_paragraph">
            <button className="toggle_down_btn">
              <i className="fas fa-caret-down"></i>
            </button>
            <p>Hakuna Mungu kama Wewe</p>
          </div>
          <div className="flex_separator_one"></div>
          <p className="price_label">Ksh.500</p>
          <button className="album_action">Buy Album</button>
          <button className="album_action disabled" disabled>Download</button>
      </div>
      <div className="song_details  ">
        <div className="btn_paragraph">
          <button className="play_pause_btn">
            <i className="far fa-play-circle"></i>
          </button>
          <p>Nani kama Wewe</p>
        </div>
        <div className="flex_separator_one"></div>
        <span className="price_label">Tsh.100</span>
        <button className="song_action">Play</button>
        <button className="song_action disabled" disabled>Download</button>
      </div>
      <div className="song_details  ">
        <div className="btn_paragraph">
          <button className="play_pause_btn">
            <i className="far fa-play-circle"></i>
          </button>
          <p>Wastahili</p>
        </div>
        <div className="flex_separator_one"></div>
        <span className="price_label">Tsh.100</span>
        <button className="song_action">Play</button>
        <button className="song_action disabled" disabled>Download</button>
      </div>
      <div className="song_details  ">
        <div className="btn_paragraph">
          <button className="play_pause_btn">
            <i className="far fa-play-circle"></i>
          </button>
          <p>All my Days</p>
        </div>
        <div className="flex_separator_one"></div>
        <span className="price_label">Tsh.80</span>
        <button className="song_action">Play</button>
        <button className="song_action disabled" disabled>Download</button>
      </div>
    </>
)