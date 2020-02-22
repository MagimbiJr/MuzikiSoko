import React from 'react';

export default () => (
    <>
      <div className="album_details">
          <div className="btn_paragraph">
            <button className="toggle_down_btn">
              <i className="fas fa-caret-down"></i>
            </button>
            <p>My Latter Day Will Come</p>
          </div>
          <div className="flex_separator_one"></div>
          <p className="price_label">Ksh.400</p>
          <button className="album_action">Buy Album</button>
          <button className="album_action disabled" disabled>Download</button>
      </div>
    </>
)