import React from 'react'
import Header from './components/Header'
import CastCredits from './components/CastCredits'
import TvShow from './components/TvShows'

import HomePage from './components/HomePage'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:results" component={TvShow}></Route>
          <Route exact path="/:results/:actors" component={CastCredits}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
