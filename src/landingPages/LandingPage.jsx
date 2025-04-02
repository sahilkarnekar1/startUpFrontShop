import React from 'react'
import "../landingPages/landingPage.css"
import LandingBgComp from './LandingBgComp'
import arrowForwardPng from "../uiuxassets/arrow_forward.png"
import Ecommercecampaign from "../uiuxassets/Ecommercecampaign.png"


const LandingPage = () => {
    return (
     <div className="landingPageMainDiv">
        <LandingBgComp/>
        <div className="mainOverlayDiv">
        <div className='makePosition setWidth8687'>
                <p className='setWidth78687 setMargin78687'>"Boost Your Sales with Our eCommerce Partnership Solutions"</p>
                <p className='setMargin78687 setWidthForLandingDeac'>"Unlock growth with expert strategies, seamless integrations, and data-driven insights partner with us to scale your online business faster."</p>
                <button className='becomePartnerBtn'><div className='becomePartnerBtnDiv8768'><p className='becomePartnerBtnTxt'>Become a partner</p><img className='becomePartnerBtnForwardArrowImg' src={arrowForwardPng} alt='arf'/></div></button>
            </div>

                <img className='Ecommercecampaign' src={Ecommercecampaign} alt='Ecommercecampaign'/>
      
        </div>
        {/* <div className="mainOverlayDiv">
        <div className='makePosition setWidth8687'>
                <p className='setWidth78687 setMargin78687'>"Boost Your Sales with Our eCommerce Partnership Solutions"</p>
                <p className='setMargin78687 setWidthForLandingDeac'>"Unlock growth with expert strategies, seamless integrations, and data-driven insights partner with us to scale your online business faster."</p>
                <button className='becomePartnerBtn'><div className='becomePartnerBtnDiv8768'><p className='becomePartnerBtnTxt'>Become a partner</p><img className='becomePartnerBtnForwardArrowImg' src={arrowForwardPng} alt='arf'/></div></button>
            </div>
            <div className="landingVectorPersonesImgDiv">
                <img src={Ecommercecampaign} alt='Ecommercecampaign'/>
            </div>
        </div> */}
       
           
     </div>
    )
}

export default LandingPage
