import React, {useState} from 'react'

const Home = () => {
  const [connecting, tryConnect] = useState(false)
  return <div id="home-container">
    <div id="home-mission-statement">
      Rusty Stream is a 3x modded, streamer friendly server. It is our mission
      to create and inspire an atmosphere where you can stream without the
      constant worry of stream sniping and the hassle it brings for you and your
      viewers.
    </div>
    <a
      onMouseEnter={() => tryConnect(true)}
      onMouseLeave={() => tryConnect(false)}
      href="steam://connect/104.194.10.152:28015"
      id="server-button"
    >
      {connecting ? 'close rust first' : 'Direct Connect'}
    </a>
  </div>
}

export default Home

// <img id='rust-logo' src='rust.png' />
