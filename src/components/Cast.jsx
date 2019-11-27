import React from 'react'

const Cast = props => {
  return (
    <>
      <section className="cast">
        <img
          className="cc-pic"
          src={`https://image.tmdb.org/t/p/w500${props.item['profile_path']}`}
          alt={props.item.name}
        />
      </section>
      <section className="character-name">{props.item.character}</section>
      <section className="actor-name">{props.item.name}</section>
    </>
  )
}

export default Cast
