import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Crew from './components/Crew'
import Cast from './components/Cast'

const CastPage = props => {
  const [castData, setCastData] = useState([])
  const [crewData, setCrewData] = useState([])
  const showData = props.match.params.results

  const getApiData = async () => {
    const resp = await axios.get(
      `https://api.themovieb.org/3/tv${showData.id}/credits?api_key=9c1bbfefb575f9cb6c182e019bc74b99&language=en-US`
    )
    setCastData(resp.data.cast)
    setCrewData(resp.data.crew.slice(0, 10))
  }
  console.log(props.match.params)

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <>
      <section className="cast-page">
        <section className="show-details"></section>
        <img scr="" alt="" />
        <h2>{showData.name}</h2>
        <p>{showData.overview}</p>
      </section>
      <section className="crew-details">
        <h2 className="crewName">Crew</h2>
        <section className="crew-info">
          {crewData.map((info, j) => {
            return <Crew key={j} info={info} />
          })}
        </section>
      </section>

      <section className="cast-details">
        <h2>Cast</h2>
        <section className="cast-info">
          {castData.map((item, i) => {
            return <Cast key={i} item={item} />
          })}
        </section>
      </section>
    </>
  )
}

export default CastPage
