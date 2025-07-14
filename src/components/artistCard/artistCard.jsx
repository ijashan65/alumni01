import './artistCard.css'
import {ArtistCartData } from '../../config/config'  
const artistCard = () => {
  return (
   <div className='artistCardMainContainer'>
      {ArtistCartData.map((ele) => (
        <div className="artCardContainer" >
          { <img src= {ele.imgSrc} alt="artist" /> }
          { <div className='cardTextContainer'>
           <h3>{ele.heading}</h3>
            <p>{ele.subHeading}</p>
            </div> }
        </div>
      ))}
    </div>
  )
}

export default artistCard
