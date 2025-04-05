import React from 'react'
import "../landingPages/RegisterShopComp.css"
import listPng from "../uiuxassets/list.png"
import filePng from "../uiuxassets/File.png"
import evaluationPng from "../uiuxassets/evaluation.png"
import IndiaFlag from "../uiuxassets/IndiaFlag.png"
import dropdownimg from "../uiuxassets/arrow_drop_down.png"
import mapBG from "../uiuxassets/Basemapimage.png"
import { Checkbox } from 'antd'

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


            <div className="bussinessstorenamecompdivcard">
                <div className="headingsubdivforcardregistrationbussiness">
                    <p className="headingptagforbussinessregistration">
                    Owner details
                    </p>
                    <p className="descriptionptagforbussinessregistration">
                    We will use this details for all business communication and updates                    </p>
                </div>
                <div className="bussinessstorenameinputdiv newdiplayflexonlyforthisdiv">
                    <input className='shopNameclassnameforbussinessregistration newwidthforfirstnameofowner' type="text" name="shopName" id="" placeholder='   Full name*' />
                    <input className='shopNameclassnameforbussinessregistration newwidthforfirstnameofowner' type="text" name="shopName" id="" placeholder='   Email address*' />
                </div>
                <div className="bussinessstorenameinputdiv newdiplayflexonlyforthisdiv">
                <div className='shopNameclassnameforbussinessregistration phonecuntryinputcode'>
<img className='indianFlagImg' src={IndiaFlag} alt='IndiaFlag'/>
<p className='pluscontrycodepara'>+91</p>
<img src={dropdownimg} alt="" className="dropdownarrow" />
                </div>
                <input className='shopNameclassnameforbussinessregistration phoneinputnewWidth' type="text" name="shopName" id="" placeholder='   Phone number*' />
                    </div>


                    <div className="bussinessstorenameinputdiv">
                    <p className="headingptagforbussinessregistration">
                    Owner details
                    </p>
                    <p className="descriptionptagforbussinessregistration">
                    We will use this details for all business communication and updates                    </p>
                        </div>

                        <div className="bussinessstorenameinputdiv">
                            <div className="chockboxdivsameasowner shopNameclassnameforbussinessregistration newheightforcheckboxdivshop">
                            <Checkbox style={{
                                marginLeft:"20px"
                            }}> Same as owner mobile number</Checkbox>
                            </div>
                        
                        </div>

            </div>

            <div className="bussinessstorenamecompdivcard">
                <div className="headingsubdivforcardregistrationbussiness">
                    <p className="headingptagforbussinessregistration">
                    Add your Business/Store’s location for order pickup
                    </p>
                
                </div>

                 <div className="bussinessstorenameinputdiv">
                    <div className="shopNameclassnameforbussinessregistration newborderbottomsonly">
                    <div className="shopNameclassnameforbussinessregistration">
                            hgvhgv
                        </div>
                        <img src={mapBG} alt="" srcset="" className='gvhgvhgvhg656576'/>
                       
                        <p className="headingptagforbussinessregistration hghgvhgvhgv6576576">
                        Sadashiv peth
                    </p>
                    <p className="descriptionptagforbussinessregistration hghgvhgvhgv6576576">
                    Pune Station, pune                    </p>
                    </div>
                </div>
              
            </div>


        </div>
    </div>
  )
}

export default RegisterShopComp
