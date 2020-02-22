import axios from "axios"

export default axios.create({
  baseURL: " http://muzikisoko.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
})
