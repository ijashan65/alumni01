import React from 'react'
import './trending.css'
import TrendingCard from '../trendingCard/trendingCard.jsx'
const trending = () => {
  return (
    <div className='trendingSectionMainContainer'>
     <span>Trending Song</span> 
      <TrendingCard />
    </div>
  )
}

export default trending
