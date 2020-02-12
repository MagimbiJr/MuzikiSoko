import React from "react";
import Toolbar from '../Toolbar/Toolbar';
import NewAlbum from "../NewAlbums/NewAlbum"


import "./header.css";

export default () => (
    <>
      <Toolbar />
      <header className="header">
        <div className="search_area">
          <input type="search" placeholder="Search your favorite Musics and Artists here" />
        </div>
      </header>
      <NewAlbum />
    </>
)