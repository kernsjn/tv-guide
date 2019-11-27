import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CastCredits = props => {
  const [actorData, setActorData] = useState([])
  const [tvData, setTvData] = useState([])
  const [movieData, setMovieData] = useState([])
  const actorSearch = props.match.params.actors
  const showSearch = props.match.params.results

  const getActorsApi = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/person/${actorSearch}?api_key=9c1bbfefb575f9cb6c182e019bc74b99&language=en-US`
    )
    console.log(resp.data)
    setActorData(resp.data)
  }

  const getTvApi = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/person/${showSearch}/tv_credits?api_key=9c1bbfefb575f9cb6c182e019bc74b99&language=en-US`
    )
    console.log(resp.data)
    setTvData(resp.data.cast)
  }

  const getMovieApi = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/person/${showSearch}/movie_credits?api_key=9c1bbfefb575f9cb6c182e019bc74b99&language=en-US`
    )
    console.log(resp.data)
    setMovieData(resp.data.cast)
  }

  useEffect(() => {
    getActorsApi()
    getTvApi()
    getMovieApi()
  }, [])

  return (
    <>
      <div className="actor-poster">
        <img
          className="actor-pic"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${actorData.profile_path}`}
        />
        <section className="actor-info">
          <h1 className="actor-name">{actorData.name}</h1>
          <h3>What do you want to call this section?</h3>
          <p className="actor-overview">{actorData.biography}</p>
        </section>
        <section>
          <h1>Tv Shows</h1>
          <ul className="tv-show-list">
            {tvData.map((shows, j) => {
              return (
                <li className="tv-shows" key={j}>
                  <Link to={`/${shows.id}`}>
                    <img
                      className="tv-shows-poster"
                      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${shows.poster_path}`}
                      alt={`Poster of ${shows.name}`}
                    />
                    <p>{shows.name}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
        <section>
          <h1>Movies</h1>
          <ul className="movies-list">
            {movieData.map((movie, i) => {
              return (
                <li className="movies" key={i}>
                  <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
                    alt={`Poster of ${movie.name}`}
                  />
                  <p>{movie.name}</p>
                  <p>{movie.character}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </>
  )
}

export default CastCredits
