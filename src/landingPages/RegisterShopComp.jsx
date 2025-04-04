import React from 'react'
import "../landingPages/RegisterShopComp.css"
import listPng from "../uiuxassets/list.png"
import filePng from "../uiuxassets/File.png"
import evaluationPng from "../uiuxassets/evaluation.png"

const RegisterShopComp = () => {
  return (
    <div className="registershopmaincomponent">
        <div className="completeRegistrationStepsDiv">
            <div className="headerforcompleteregistratiionsstepsdiv">
                <p className='newclassforheadingptagcompleteregistrationshop'>Complete your registration</p>
            </div>
            <div className="stepsdivmaincont">
                    <div className="cardsdivofstepscontainerIconAndCircleborderdiv">
                        <img src={listPng} alt='list'/>
                    </div>
                    <div className="cardsdivofstepscontainer">
                        <p className='regstepscardheading'>Business/Store information</p>
                        <p className='regstepscarddescloc'>Name, location and contact number</p>
                    </div>
                </div>
                <div className="linestepsdiv">
                        
                        </div>


                        <div className="stepsdivmaincont">
                    <div className="cardsdivofstepscontainerIconAndCircleborderdiv">
                        <img src={listPng} alt='list'/>
                    </div>
                    <div className="cardsdivofstepscontainer">
                        <p className='regstepscardheading'>Business/Store information</p>
                        <p className='regstepscarddescloc'>Name, location and contact number</p>
                    </div>
                </div>
                <div className="linestepsdiv">
                        
                        </div>

                        <div className="stepsdivmaincont">
                    <div className="cardsdivofstepscontainerIconAndCircleborderdiv">
                        <img src={filePng} alt='list'/>
                    </div>
                    <div className="cardsdivofstepscontainer">
                        <p className='regstepscardheading'>Business/Store information</p>
                        <p className='regstepscarddescloc'>Name, location and contact number</p>
                    </div>
                </div>
                <div className="linestepsdiv">
                        
                        </div>

                        <div className="stepsdivmaincont">
                    <div className="cardsdivofstepscontainerIconAndCircleborderdiv">
                        <img src={evaluationPng} alt='list'/>
                    </div>
                    <div className="cardsdivofstepscontainer">
                        <p className='regstepscardheading'>Business/Store information</p>
                        <p className='regstepscarddescloc'>Name, location and contact number</p>
                    </div>
                </div>
                
        </div>
        <div className="anothermaindivfordisplayflexregistration">
            <p className='bussinessnameregheadingclass'>Business/Store information</p>

            <div className="bussinessstorenamecompdivcard">
                <div className="headingsubdivforcardregistrationbussiness">
                    <p className="headingptagforbussinessregistration">
                    Business/Store name
                    </p>
                    <p className="descriptionptagforbussinessregistration">
                    Customers will see this name                     </p>
                </div>
                <div className="bussinessstorenameinputdiv">
                    <input className='shopNameclassnameforbussinessregistration' type="text" name="shopName" id="" placeholder='   Bussiness / Store Name' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterShopComp
