import React from 'react'
import './mainsection.css'
import Trending from '../Trending/trending'
import PopularArtists from '../popularArtist/popularartist'
import PopularAlbum from '../popularalbum/popularAlbum'

const MainSection = () => {
  return (
    <div class="mainSection">
      <Trending/>
      <PopularArtists/>
      <PopularAlbum/>
    </div>
  )
}

export default MainSection
