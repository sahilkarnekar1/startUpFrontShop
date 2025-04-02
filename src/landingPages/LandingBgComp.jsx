import React from 'react'
import corner1Img from "../uiuxassets/corner1Vector.png"
import corner2Img from "../uiuxassets/VectorCorner2.png"
import corner3Img from "../uiuxassets/VectorRightBg.png"
import "../landingPages/LandingBgComp.css"

const LandingBgComp = () => {
  return (
     <div className='c1VectorClass'>
               <img className='makePosition corner2ImgSize' src={corner2Img} alt='c2' />
               <img className='makePosition' src={corner1Img} alt='c1' />

               <img className='makePosition cornerRightDivImg' src={corner3Img} alt='c3' />
            
           </div>
  )
}

export default LandingBgComp
