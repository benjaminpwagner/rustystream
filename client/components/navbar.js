import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'

const Navbar = ({history, location}) => {
  const [showDonate, setDonate] = useState(false)

  const fixContent = () => {
    if (location.pathname == '/') setDonate(false)
    if (location.pathname == '/donate') setDonate(true)

    const bottom = document
      .getElementById('main-navbar')
      .getBoundingClientRect().bottom

    const homeContainer = document.getElementById('home-container')
    const donateContainer = document.getElementById('donate-container')
    const clientHeight = document.documentElement.clientHeight
    const clientWidth = document.documentElement.clientWidth

    if (homeContainer) {
      homeContainer.style.height = clientHeight - bottom + 'px'
      homeContainer.style.top = bottom + 'px'
      donateContainer.style.height = clientHeight - bottom + 'px'
      donateContainer.style.top = bottom + 'px'
      homeContainer.style.left = (showDonate ? -clientWidth : 0) + 'px'
      donateContainer.style.left = (showDonate ? 0 : 2 * clientWidth) + 'px'
    }
  }

  useEffect(() => {
    fixContent()
    window.addEventListener('resize', fixContent)
    return () => {
      window.removeEventListener('resize', fixContent)
    }
  })

  return (
    <div id="main-navbar">
      <div
        id="nav-logo"
        onClick={() => {
          setDonate(false)
          history.push('/')
        }}
      >
        <img id="logo-img" src="logo.png" />
        <div id="logo-text">Rusty Stream</div>
      </div>
      <div id="nav-buttons">
        <a
          id="discord-button"
          href="https://discord.gg/HMnMPK5"
          target="_blank"
        >
          <img id="discord-logo" src="discord.png" />
        </a>

        <div
          id="donate-button"
          onClick={() => {
            setDonate(true)
            history.push('/donate')
          }}
        >
          <img id="donate-logo" src="donate.png" />
          <div id="donate-text">Donate</div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Navbar)
