import './navBar.css'
import React, { useState } from 'react';

const Navbar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <nav>
      <img src='https://images.idgesg.net/images/article/2018/11/spotify-logo-100779042-large.3x2.jpg' alt="Spotify Logo" />
      <div className="Home"><button>&#8962;</button></div>
      <div className='searchBar'>
        &#128269; <input
          type="text"
          placeholder=" What yo want to play?"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ padding: "0.5rem", width: "200px" }}
        />
      </div>
      <p className='navDescription'>Premium  Support Download  |  install App   signup </p>
      <div className="login"><button>Log in</button></div>
    </nav>
  )
}

export default Navbar
