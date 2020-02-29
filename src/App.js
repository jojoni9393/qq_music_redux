import React from 'react'
import {
  BrowserRouter as Router,
  Route
  // Redirect,
  // Switch,
  // NavLink
} from 'react-router-dom'
import Hander from 'page/Hander'
import MainIndex from 'page/MainIndex'
import MainSearch from 'page/MainSearch'
import Footer from 'page/Footer'

const App = () => {
  return (
    <Router>
      <Route path="/" component={Hander} />
      <Route path="/sub/index" component={MainIndex} />
      <Route exact path="/search" component={MainSearch} />
      <Route path="/" component={Footer} />
    </Router>
  )
}

export default App
