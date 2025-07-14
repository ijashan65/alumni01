import React from 'react'
import './trendingCard.css'
import { TrendingCartData } from '../../config/config'  
const trendingCard = () => {
  return (
    <div className='trendingCardMainContainer'>
      {TrendingCartData.map((ele) => (
        <div className="CardContainer" >
          <img src= {ele.imgSrc} alt="Trending" />
          <div className='cardTextContainer'>
           <h3>{ele.heading}</h3>
            <p>{ele.subHeading}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default trendingCard
