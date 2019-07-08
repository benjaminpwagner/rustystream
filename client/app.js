import React from 'react'

import {Navbar, Home, Donate} from './components'

const App = () => {
  return (
    <div id="main-app">
      <Navbar />
      <div id='content-container'>
        <Home />
        <Donate />
      </div>
    </div>
  )
}

export default App
