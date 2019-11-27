import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TvShow = props => {
  const [castData, setCastData] = useState([])
  const [showData, setShowData] = useState([])

  const tvSearch = props.match.params.results

  const getShowApi = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvSearch}?api_key=9c1bbfefb575f9cb6c182e019bc74b99&language=en-US`
    )
    console.log(resp.data)
    setShowData(resp.data)
  }

  const getCastApi = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvSearch}/credits?api_key=9c1bbfefb575f9cb6c182e019bc74b99&language=en-US`
    )
    console.log(resp.data)
    setCastData(resp.data.cast)
  }

  useEffect(() => {
    getCastApi()
    getShowApi()
  }, [])

  return (
    <>
      <div className="series-details">
        <div>
          <img
            className="series-poster"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${showData.poster_path}`}
          />
        </div>
        <div className="series-content">
          <h1 className="series-details-header">{showData.name}</h1>

          <p className="series-details-overview">{showData.overview}</p>
        </div>
      </div>
      <div>
        <h1 className="cast-heading">Cast</h1>
      </div>
      <section className="series-cast">
        <span></span>
        <ul className="actor-list">
          {castData.map((actor, j) => {
            return (
              <li className="actors" key={j}>
                <Link to={`/${tvSearch}/${actor.id}`}>
                  <img
                    className="actor-picture"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${actor.profile_path}`}
                    alt={`Picture of ${actor.name}`}
                  />
                  <p className="actor-name-link">{actor.name}</p>
                </Link>
                <p>{actor.character}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
export default TvShow
