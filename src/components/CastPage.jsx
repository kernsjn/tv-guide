import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cast from '../components/Cast'
import Crew from '../components/Crew'

const CastPage = props => {
  const [castData, setCastData] = useState([])
  const [crewData, setCrewData] = useState([])
  const showData = props.location.state.show
  const fetchData = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showData.id}/credits?api_key=02f778ceced92735175a972d795524b5&language=en-US`
    )

    setCastData(resp.data.cast)
    setCrewData(resp.data.crew.slice(0, 10))
  }
  console.log(props.location.state.show)
  // console.log(castData)
  // console.log(crewData)
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <section className="cast-page">
        <section className="show-information">
          <img src="" alt="" />
          <h2>{showData.name} </h2>
          <p>{showData.overview}</p>
        </section>
        <section className="crew-info">
          <h2 className="crew-title">Crew</h2>
          <section className="crew-information">
            {crewData.map((thing, j) => {
              return <Crew key={j} thing={thing} />
            })}
          </section>
        </section>
        <section className="cast-info">
          <h2>Cast</h2>
          <section className="cast-information">
            {castData.map((item, i) => {
              return <Cast key={i} item={item} />
            })}
          </section>
        </section>
      </section>
    </>
  )
}
export default CastPage
