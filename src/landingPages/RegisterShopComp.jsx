import React from 'react'
import "../landingPages/RegisterShopComp.css"
import listPng from "../uiuxassets/list.png"
import filePng from "../uiuxassets/File.png"
import evaluationPng from "../uiuxassets/evaluation.png"
import IndiaFlag from "../uiuxassets/IndiaFlag.png"
import dropdownimg from "../uiuxassets/arrow_drop_down.png"
import mapBG from "../uiuxassets/Basemapimage.png"
import searchImgIcon from "../uiuxassets/search.png"
import GroupCurrentMark from "../uiuxassets/GroupCurrentMark.png"
import docsPngImage from "../uiuxassets/docs.png"
import arrowrightpng from "../uiuxassets/arrow_right.png"


import { Checkbox } from 'antd'

const RegisterShopComp = () => {
  return (
    <div className="registershopmaincomponent">
        <div className="wrapperdivforstepsdiv">
 <div className="completeRegistrationStepsDiv">
            <div className="headerforcompleteregistratiionsstepsdiv">
                <p className='newclassforheadingptagcompleteregistrationshop'>Complete your registration</p>
            </div>

<div className="wrapstepsdivnewbjd7734">
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
                
        </div>

<div className="completeRegistrationStepsDiv jhccsdjhcsdjh63743">
<img src={docsPngImage} alt=''/>
<p className="documentsrequiredsidebutton">
Documents required for registration
</p>
<img src={arrowrightpng} alt=''/>
</div>

<div className="completeRegistrationStepsDiv jhccsdjhcsdjh63743">
<p className="documentsrequiredsidebutton">
Documents required for registration
</p>
<p className="documentsrequiredsidebutton hdcjhsdcjdc4634673">Yes</p>
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

                        <div className="bussinessstorenameinputdiv newdiplayflexonlyforthisdiv">
                <div className='shopNameclassnameforbussinessregistration phonecuntryinputcode'>
<img className='indianFlagImg' src={IndiaFlag} alt='IndiaFlag'/>
<p className='pluscontrycodepara'>+91</p>
<img src={dropdownimg} alt="" className="dropdownarrow" />
                </div>
                <input className='shopNameclassnameforbussinessregistration phoneinputnewWidth' type="text" name="shopName" id="" placeholder='   Phone number*' />
                    </div>

            </div>

            <div className="bussinessstorenamecompdivcard nkjdsncbuyeuw743834">
                <div className="headingsubdivforcardregistrationbussiness">
                    <p className="headingptagforbussinessregistration">
                    Add your Business/Store’s location for order pickup
                    </p>
                
                </div>

                 <div className="bussinessstorenameinputdiv">
                    <div className="shopNameclassnameforbussinessregistration newborderbottomsonly">
                    <div className="newwidthandpositionformapsearchdiv">
                            <div className="shopNameclassnameforbussinessregistration cjsvdcgsd767434">
                                <img src={searchImgIcon} alt='searchImgIcon' className='jhbcjdhbfvjf473873'/>
                                <input type="text" className="newinputsearchlocinmapinput" placeholder='Search for area, street name ' />
                            </div>
                            <div className="currentlocaltionmmaindivbutton">
                                <div className="currentlocbutton">
                                    <img src={GroupCurrentMark} className='currentimgloc' alt='GroupCurrentMark'/>
                                    <p className='currentparatxtloc'>Use current location</p>
                                </div>
                            </div>
                        </div>
                        <img src={mapBG} alt="" srcset="" className='gvhgvhgvhg656576'/>
                       
                        <p className="headingptagforbussinessregistration hghgvhgvhgv6576576">
                        Sadashiv peth
                    </p>
                    <p className="descriptionptagforbussinessregistration hghgvhgvhgv6576576 gvhgvhgvh7576">
                    Pune Station, pune                    </p>
                    </div>

<div className="newdividerdivforaddressheading">
<p className="headingptagforbussinessregistration hghgvhgvhgv6576576 hgvhvhg768">
                    Business/Store’s address details                    </p>
                    <p className="descriptionptagforbussinessregistration hghgvhgvhgv6576576 gvhgvhgvh7576 vhvhgvhg67768">
                    Address details are basis the restaurant location mentioned above                     </p>

                    <div className="bussinessstorenameinputdiv newdiplayflexonlyforthisdiv fvbjhsakcsdhb84223">
                    <input className='shopNameclassnameforbussinessregistration newwidthforfirstnameofowner' type="text" name="shopName" id="" placeholder='   Shop no. / building no. (optional)' />
                    <input className='shopNameclassnameforbussinessregistration newwidthforfirstnameofowner' type="text" name="shopName" id="" placeholder='   Floor / tower (optional)' />
                </div>

                <div className="bussinessstorenameinputdiv newdiplayflexonlyforthisdiv fvbjhsakcsdhb84223">
                    <input className='shopNameclassnameforbussinessregistration newwidthforfirstnameofowner' type="text" name="shopName" id="" placeholder='   Area / Sector / Locality*' />
                    <input className='shopNameclassnameforbussinessregistration newwidthforfirstnameofowner' type="text" name="shopName" id="" placeholder='   City' />
                </div>

                <div className="bussinessstorenameinputdiv fvbjhsakcsdhb84223">
                    <input className='shopNameclassnameforbussinessregistration' type="text" name="shopName" id="" placeholder='   Add any nearby landmark (optional)' />
                </div>
</div>
                </div>

                <div className="bottomNotetxtdiv">
                Please ensure that this address is the same as mentioned on your FSSAI license
                </div>
              
            </div>

            <div className="buttonnextdiv">
                <button className='nextactualbutton'>Previous</button>
                <button className='nextactualbutton'>Next</button>
            </div>


        </div>
    </div>
  )
}

export default RegisterShopComp
