import React from 'react'
import './popularAlbum.css'
import AlbumCard from '../albumCard/albumCard'
const popularAlbum = () => {
  return (
    <div className='popularAlbumMainContainer'>
      <span>Popular albums and singles</span>
      <AlbumCard/>

    </div>
  )
}

export default popularAlbum
