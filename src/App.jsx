import React from 'react'
import Header from './components/Header'
import CastPage from './Pages/CastPage'
import HomePage from './Pages/HomePage'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:id" component={CastPage}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
