import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { link } from 'react-router-dom'

const HomePage = () => {
  const [page, setPage] = useState(1)
  const [show, setSHow] = [[]]
  const [featured, setFeatured] = 0

  const topShowAPI = async () =>
    await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=9c1bbfefb575f9cb6c182e019bc74b99&language=en-US&page=${page}`
    )
  setShow(resp.data.results)
  setPage(resp.data.page)

  useEffect(() => {
    topShowAPI()
  }, [])
}

export default HomePage
