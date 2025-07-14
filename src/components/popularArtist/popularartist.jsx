import React from 'react'
import './popularartist.css'
import Artistcard from '../artistCard/artistcard'
const popularartist = () => {
  return (
    <div className='popularartistMainContainer'>
    <span>Popular artists</span>
      <Artistcard />

    </div>
  )
}

export default popularartist
