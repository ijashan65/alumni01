import React from 'react'
import './albumCard.css'
import {AlbumCartData} from '../../config/config'
const albumCard = () => {
    return (
     <div className='albumCardMainContainer'>
        {AlbumCartData.map((ele) => (
          <div className="albCardContainer" >
            { <img src= {ele.imgSrc} alt="Album" /> }
            { <div className='cardTextContainer'>
             <h3>{ele.heading}</h3>
              <p>{ele.subHeading}</p>
              </div> }
          </div>
        ))}
      </div>
  )
}

export default albumCard
