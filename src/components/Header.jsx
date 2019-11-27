import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <main>
        <section>
          <h1 className="top-title">Top-Rated TV Shows</h1>
          <img src="" />
          <header></header>
        </section>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </main>
    </>
  )
}

export default Header
