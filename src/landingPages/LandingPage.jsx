import React from 'react'
import corner1Img from "../uiuxassets/corner1Vector.png"
import corner2Img from "../uiuxassets/VectorCorner2.png"
import "../landingPages/landingPage.css"

const LandingPage = () => {
    return (
        <div className='c1VectorClass'>
            <img className='makePosition' src={corner2Img} alt='c2' />
            <img className='makePosition' src={corner1Img} alt='c1' />
            <div className='makePosition setWidth8687'>
                <p className='setWidth78687 setMargin78687'>"Boost Your Sales with Our eCommerce Partnership Solutions"</p>
                <p className='setMargin78687 setWidthForLandingDeac'>"Unlock growth with expert strategies, seamless integrations, and data-driven insights partner with us to scale your online business faster."</p>
                <button>Become a partner</button>
            </div>

        </div>
    )
}

export default LandingPage
