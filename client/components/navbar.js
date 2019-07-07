import React, {useEffect} from 'react'

const Navbar = () => {
  // const fixHomeHeight = () => {
  //   const top = document
  //     .getElementById('main-navbar')
  //     .getBoundingClientRect()
  //     .top

  //   document.getElementById('home-container').style.height = (document.documentElement.clientHeight - top) + 'px'
  // }

  // useEffect(() => {
  //   fixHomeHeight()
  //   window.addEventListener('resize', fixHomeHeight)
  //   return () => {
  //     window.removeEventListener('resize', fixHomeHeight)
  //   }
  // })

  return (
    <div id="main-navbar">
      <div id="nav-logo">
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

        <div id="donate-button">
          <img id="donate-logo" src="donate.png" />
          <div id="donate-text">Donate</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
