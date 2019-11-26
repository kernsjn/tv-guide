import React from 'react'

const Crew = props => {
  return (
    <>
      <section>
        <section>
          <span>
            <h1 className="strong">{props.info.job}</h1>
          </span>
          {props.info.name}
        </section>
      </section>
    </>
  )
}

export default Crew
