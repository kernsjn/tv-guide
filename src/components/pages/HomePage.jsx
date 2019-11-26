import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { link } from 'react-router-dom'

const HomePage = () => {
  const [page, setPage] = useState(1)
  const [show, setSHow] = useState[[]]
  const [featured, setFeatured] = useState(0)

  const topShowAPI = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=9c1bbfefb575f9cb6c182e019bc74b99&language=en-US&page=${page}`
    )

    console.log(resp.data.results)
    setShow(resp.data.results)
    setPage(resp.data.page)
    setFeatured(Math.floor(Math.random() * resp.data.results.length))
  }

  useEffect(() => {
    topShowAPI()
  }, [page])

  return (
    <>
      <main className="main-page">
        <h1 className="title">Top-Rate TV</h1>
        <div className="random-image"></div>
      </main>
    </>
  )
}

export default HomePage