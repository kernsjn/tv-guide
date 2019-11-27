import React from 'react'

const Crew = props => {
  return (
    <>
      <section>
        <section>
          <span className="credits-display">
            <h1 className="strong">{props.thing.job}:</h1>

            <p className="crew-member">{props.thing.name}</p>
          </span>
        </section>
      </section>
    </>
  )
}

export default Crew
