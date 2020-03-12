import React, { useState } from "react"
import { Link } from "gatsby"
import Album from "../Album/Album"

import "../artistportal.css"

export default () => {
  const [openedList, updateOpenedList] = useState([0])

  const updateAlbumState = album => {
    if (openedList.includes(album)) {
      const updatedList = openedList.filter(item => album !== item)
      updateOpenedList(updatedList)
    } else {
      const updatedList = [...openedList, album]
      updateOpenedList(updatedList)
    }
  }
  return (
    <div className="main_portal">
      <h2>My Music</h2>
      <div className="type_action">
        <span>Albums</span>
        <span>Singles</span>
        <Link to="/add music" className="add_music_btn">
          Add Music <i className="fas fa-plus"></i>
        </Link>
      </div>
      <Album
        albums={[0, 1, 2, 3, 4, 5]}
        onSelected={album => updateAlbumState(album)}
        openedList={openedList}
      />
    </div>
  )
}
