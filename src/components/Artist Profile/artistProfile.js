import React from "react"
import Toolbar from "../Toolbar/Toolbar"
import Biography from "./Biography/Biography"
import Discography from "./Discography/Discography"

import "./artist profile.css"

export default () => (
  <>
    <Toolbar />
    <section className="artist_profile">
      <div className="container">
        <div className="artist_profile_wrapper">
          <div className="biography">
            <Biography />
          </div>
          <div className="discography">
            <Discography />
          </div>
        </div>
      </div>
    </section>
  </>
)
