import React from 'react'

const Crew = props => {
  return (
    <>
      <section>
        <section>
          <span>
            <h1 className="strong">{props.thing.job}</h1>
          </span>
          {props.thing.name}
        </section>
      </section>
    </>
  )
}

export default Crew
