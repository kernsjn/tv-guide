import React from 'react'

const Cast = props => {
  return (
    <>
      <section>
        <img
          className=""
          src={`https://image.tmbb.org/t/p/w500${props.item['profile_path']}`}
          alt={props.item.name}
        />
      </section>
      <section className="character-name">{props.item.character}</section>
      <section className="actor-name">{props.item.name}</section>
    </>
  )
}

export default Cast
