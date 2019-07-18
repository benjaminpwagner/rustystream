import React from 'react'
import {withRouter} from 'react-router-dom'
import {Navbar, Home, Donate} from './components'
import Thanks from './components/thanks';

const App = ({location}) => {
  const thanks =
    location.pathname == '/thanks'

  return (
    <div id="main-app">
      <Navbar />
      {!thanks &&
        <div id="content-container">
          <Home />
          <Donate />
        </div>
      }
      {thanks && <Thanks />}
    </div>
  )
}

export default withRouter(App)
