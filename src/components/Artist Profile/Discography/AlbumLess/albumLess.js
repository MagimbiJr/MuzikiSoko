import React from 'react';

export default () => (
    <>
      <div className="album_details">
          <p><i className="fas fa-sort-down"></i> My Latter Day Will Come</p>
          <div className="flex_separator_one"></div>
          <p className="price_label">Ksh.400</p>
          <button className="album_action">Buy Album</button>
          <button className="album_action disabled" disabled>Download</button>
      </div>
    </>
)