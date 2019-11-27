import React from 'react'

const Cast = props => {
  return (
    <>
<<<<<<< HEAD
      <section>
        <img className="" src="" />
=======
      <section className="cast">
        <img
          className="cc-pic"
          src={`https://image.tmdb.org/t/p/w500${props.item['profile_path']}`}
          alt={props.item.name}
        />
>>>>>>> 31fa390127af725d2fd273b1445e44244e77ce19
      </section>
      <section className="character-name">{props.item.character}</section>
      <section className="actor-name">{props.item.name}</section>
    </>
  )
}

export default Cast
