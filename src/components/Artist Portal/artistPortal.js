import React, { useEffect } from "react"
import Toolbar from "../Toolbar/Toolbar"
import PortalHeader from "./PortalHeader/portalHeader"
import PortalMain from "./PortalMain/portalMain"
import JwtDecode from "jwt-decode"
import { navigate } from "gatsby"

import "./artistportal.css"

export default () => {
  useEffect(() => {
    const token = localStorage.getItem("access_token")
    if (token) {
      const decodedToken = JwtDecode(token)
      if (decodedToken && decodedToken["userRole"] !== "Artist") {
        navigate("/")
      }
    } else {
      navigate("/")
    }
  }, [])
  return (
    <>
      <Toolbar theme={"dark"} />
      <section className="artist_portal">
        <div className="container">
          <PortalHeader />
          <PortalMain />
        </div>
      </section>
    </>
  )
}
