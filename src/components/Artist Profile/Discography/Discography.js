import React from 'react';
import AlbumFull from "./AlbumFull/albumFull";
import  AlbumLess from "./AlbumLess/albumLess";
import AlbumFew from "./AlbumFew/albumFew"

export default () => (
    <>
    <h3>Discography</h3>
      <AlbumFull />
      <AlbumLess />
      <AlbumFew />
    </>
)