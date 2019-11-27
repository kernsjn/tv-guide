import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [tvShow, setTvShow] = useState([[]])
  const [currentPage, setCurrentPage] = useState(1)
  const [random, setRandom] = useState(0)
  const show = { show }

  const getApiData = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=9c1bbfefb575f9cb6c182e019bc74b99&language=en-US&page=${currentPage}`
    )
    console.log(resp.data.results)
    setTvShow(resp.data.results)
    setCurrentPage(resp.data.page)
    setRandom(Math.floor(Math.random() * resp.data.results.length))
    console.log(resp)
  }

  useEffect(() => {
    getApiData()
  }, [currentPage])

  return (
    <>
      <main className="main-page">
        <div className="tv-item-random">
          <div className>
            {/* <Link to={{ pathname: `/${tvShow[random].id}`, state: { show } }}> */}
            <img
              className="random-image"
              src={`https://image.tmdb.org/t/p/w500${tvShow[random].poster_path}`}
            />
            {/* </Link> */}
          </div>
          <div className="details">
            <h2>{tvShow[random].name}</h2>
            <h3>Rating: {tvShow[random].vote_average}</h3>
            <p className="random-overview">{tvShow[random].overview}</p>
          </div>
        </div>
        <section className="tv-item-section">
          <ul className="tv-show">
            {tvShow.map((show, i) => {
              return (
                <li className="item" key={i} show={show}>
                  <Link
                    className="show-name"
                    to={{
                      pathname: `/${show.id}`,
                      state: { show },
                    }}
                  >
                    <img
                      className="other-image"
                      src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    />
                    <h3>{show.name}</h3>
                  </Link>
                  <h3 className="rating">Rating: {show.vote_average}</h3>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}
export default HomePage
