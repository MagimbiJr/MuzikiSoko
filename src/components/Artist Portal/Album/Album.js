import React from "react"

import "../artistportal.css"

export default ({ albums, onSelected, openedList }) => {
  console.log(openedList)
  return (
    <>
      <div className="albums">
        {albums.map(album => (
          <div key={album} className="album__item">
            <div className="album_details">
              <div className="btn_paragraph">
                <button
                  className="toggle_down_btn"
                  onClick={() => onSelected(album)}
                >
                  <i
                    className={`fas ${
                      openedList.includes(album)
                        ? "fa-caret-down"
                        : "fa-caret-right"
                    }`}
                  ></i>
                </button>
                <p>Lingala Ya Yesu</p>
              </div>
              <div className="flex_separator_one"></div>
              <p className="price_label">Ksh.500</p>
              <button className="album_action_edit">Edit</button>
              <button className="album_action">Remove</button>
            </div>
            <div
              className={`song_details ${
                openedList.includes(album) ? "" : "closed"
              }`}
            >
              <div className="btn_paragraph">
                <button className="play_pause_btn">
                  <i className="far fa-play-circle"></i>
                </button>
                <p>Lingala Ya Yesu</p>
              </div>
              <div className="flex_separator_one"></div>
              <span className="price_label">Tsh.100</span>
              <button className="song_action_edit">Edit</button>
              <button className="song_action">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
{
  /* <>
<div className="album_details">
<div className="btn_paragraph">
  <button className="toggle_down_btn">
    <i className="fas fa-caret-down"></i>
  </button>
  <p>Lingala Ya Yesu</p>
</div>
<div className="flex_separator_one"></div>
<p className="price_label">Ksh.500</p>
<button className="album_action_edit">Edit</button>
<button className="album_action">Remove</button>
</div>
<div className="song_details  ">
<div className="btn_paragraph">
  <button className="play_pause_btn">
    <i className="far fa-play-circle"></i>
  </button>
  <p>Lingala Ya Yesu</p>
</div>
<div className="flex_separator_one"></div>
<span className="price_label">Tsh.100</span>
<button className="song_action_edit">Edit</button>
<button className="song_action">Remove</button>
</div>
<div className="song_details  ">
<div className="btn_paragraph">
  <button className="play_pause_btn">
    <i className="far fa-play-circle"></i>
  </button>
  <p>Uvumilivu</p>
</div>
<div className="flex_separator_one"></div>
<span className="price_label">Tsh.80</span>
<button className="song_action_edit">Edit</button>
<button className="song_action">Remove</button>
</div>
<div className="song_details  ">
<div className="btn_paragraph">
  <button className="play_pause_btn">
    <i className="far fa-play-circle"></i>
  </button>
  <p>Nikujue Bwana</p>
</div>
<div className="flex_separator_one"></div>
<span className="price_label">Tsh.50</span>
<button className="song_action_edit">Edit</button>
<button className="song_action">Remove</button>
</div>
<div className="song_details  ">
<div className="btn_paragraph">
  <button className="play_pause_btn">
    <i className="far fa-play-circle"></i>
  </button>
  <p>Wanajua</p>
</div>
<div className="flex_separator_one"></div>
<span className="price_label">Tsh.80</span>
<button className="song_action_edit">Edit</button>
<button className="song_action">Remove</button>
</div>
<div className="song_details  ">
<div className="btn_paragraph">
  <button className="play_pause_btn">
    <i className="far fa-play-circle"></i>
  </button>
  <p>Waajabu Mungu</p>
</div>
<div className="flex_separator_one"></div>
<span className="price_label">Tsh.100</span>
<button className="song_action_edit">Edit</button>
<button className="song_action">Remove</button>
</div>
<div className="song_details  ">
<div className="btn_paragraph">
  <button className="play_pause_btn">
    <i className="far fa-play-circle"></i>
  </button>
  <p>Mungu wa Eliya</p>
</div>
<div className="flex_separator_one"></div>
<span className="price_label">Tsh.100</span>
<button className="song_action_edit">Edit</button>
<button className="song_action">Remove</button>
</div>
<div className="song_details  ">
<div className="btn_paragraph">
  <button className="play_pause_btn">
    <i className="far fa-play-circle"></i>
  </button>
  <p>Asiyeshindwa</p>
</div>
<div className="flex_separator_one"></div>
<span className="price_label">Tsh.80</span>
<button className="song_action_edit">Edit</button>
<button className="song_action">Remove</button>
</div>
</> */
}
