import React from "react"

import "../../Discography/discography.css"
import AlbumToggleButton from "../../../styled/AlbumToggleButton"

export default () => (
  <>
    <div className="album_details">
      <div>
        <AlbumToggleButton></AlbumToggleButton> Lingala Ya Yesu
      </div>
      <div className="flex_separator_one"></div>
      <p className="price_label">Ksh.500</p>
      <button className="album_action">Buy Album</button>
      <button className="album_action disabled" disabled>
        Download
      </button>
    </div>
    <div className="song_details  ">
      <p>
        <i className="far fa-play-circle"></i> Lingala Ya Yesu
      </p>
      <div className="flex_separator_one"></div>
      <span className="price_label">Tsh.100</span>
      <button className="song_action">Play</button>
      <button className="song_action disabled" disabled>
        Download
      </button>
    </div>
    <div className="song_details  ">
      <p>
        <i className="far fa-pause-circle"></i> Uvumilivu
      </p>
      <div className="flex_separator_one"></div>
      <span className="price_label">Tsh.80</span>
      <button className="song_action">Play</button>
      <button className="song_action disabled" disabled>
        Download
      </button>
    </div>
    <div className="song_details  ">
      <p>
        <i className="far fa-play-circle"></i> Nikujue Bwana
      </p>
      <div className="flex_separator_one"></div>
      <span className="price_label">Tsh.50</span>
      <button className="song_action">Play</button>
      <button className="song_action disabled" disabled>
        Download
      </button>
    </div>
    <div className="song_details  ">
      <p>
        <i className="far fa-play-circle"></i> Wanajua
      </p>
      <div className="flex_separator_one"></div>
      <span className="price_label">Tsh.80</span>
      <button className="song_action">Play</button>
      <button className="song_action disabled" disabled>
        Download
      </button>
    </div>
    <div className="song_details  ">
      <p>
        <i className="far fa-play-circle"></i> Waajabu Mungu
      </p>
      <div className="flex_separator_one"></div>
      <span className="price_label">Tsh.100</span>
      <button className="song_action">Play</button>
      <button className="song_action disabled" disabled>
        Download
      </button>
    </div>
    <div className="song_details  ">
      <p>
        <i className="far fa-play-circle"></i> Mungu wa Eliya
      </p>
      <div className="flex_separator_one"></div>
      <span className="price_label">Tsh.100</span>
      <button className="song_action">Play</button>
      <button className="song_action disabled" disabled>
        Download
      </button>
    </div>
    <div className="song_details  ">
      <p>
        <i className="far fa-play-circle"></i> Asiyeshindwa
      </p>
      <div className="flex_separator_one"></div>
      <span className="price_label">Tsh.80</span>
      <button className="song_action">Play</button>
      <button className="song_action disabled" disabled>
        Download
      </button>
    </div>
  </>
)
