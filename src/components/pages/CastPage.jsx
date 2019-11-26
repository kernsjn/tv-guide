import React from 'react'
import axios from 'axios'
import React from 'react'
import Crew from './components/Crew'
import Cast from './components/Cast'

const CastPage = props => {
  const [castData, setCastData] = useState([])
  const [crewData, setCrewData] = useState([])
  const showData = props.match.params.results

  const getApiData = async () => {
    const reps = await axios.get(
      `https://api.themovieb.org/3/tv${showData.id}/credits?api_key=9c1bbfefb575f9cb6c182e019bc74b99&language=en-US`
    )
    setCastData(resp.data.cast)
  }

  return <div></div>
}

export default CastPage
