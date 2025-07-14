import React from 'react'
import'./sidebar.css'
const sideBar = () => {
  return (
    <div className="sidebarMainContainer">
   <div className='sidebarTop'> <h5>Your library</h5>
    <button className="add">+</button>
    </div>
    <div className='firstPlaylist'>
      <h4>Create your first playlist</h4>
      <p> It's easy, we'll help you</p>
      <button>Create playlist</button>

    </div>
    <div className='podcast'>
      <h4>Let's find some podcasts to follow</h4>
      <p>We'll keep you updated on new episodes</p>
      <button>Browse podcasts</button>

    </div>
   <div className="sidebarfooter">
    <div className="legal">
    <a href="https://www.spotify.com/in-en/legal/">legal   </a></div>
    <div className="privacyprivacycenter">
    <a href="https://www.spotify.com/in-en/safetyandprivacy/">safety & privacy center</a></div>
    <div className="privacypolicy">
    <a href="https://www.spotify.com/in-en/legal/privacy-policy/">privacy policy</a></div>
    <div className="cookie">
    <a href="https://www.spotify.com/in-en/legal/privacy-policy/">cookies</a></div>
    <div className="aboutme">
    <a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3">about us</a></div>
    <div className="accessibility">
    <a href="https://www.spotify.com/in-en/accessibility/">accessibility</a></div>
   </div>
   <div className="language">
    <button>&#127760; English</button>
   </div>
    </div>
  )
}

export default sideBar
