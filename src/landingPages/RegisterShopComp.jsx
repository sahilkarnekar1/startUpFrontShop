import React, { useState } from 'react'
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
import BellGlassy from "../uiuxassets/BellGlassy.png"
import listGlassy from "../uiuxassets/listGlassy.png"
import FileGlassy from "../uiuxassets/FileGlassy.png"
import docimageheadingvector from "../uiuxassets/docimageheadingvector.png"
import checkedCircle from "../uiuxassets/check_circle.png"


import { Checkbox, Modal } from 'antd'

const RegisterShopComp = () => {


    const [currentStep , setCurrentStep] = useState(1);
    const [openDocModal , setOpenDocModal] = useState(false);

const handlenextclick = ()=>{
    if (currentStep === 3) {
        return;
    }
    setCurrentStep(currentStep + 1);
}
const handleprevclick = ()=>{
    setCurrentStep(currentStep - 1);
}
const handleOpenDocModal = ()=>{
    setOpenDocModal(true);
}


    return (
        <>
              <div className="registershopmaincomponent">
            <div className="wrapperdivforstepsdiv">
                <div className="completeRegistrationStepsDiv">
                    <div className="headerforcompleteregistratiionsstepsdiv">
                        <p className='newclassforheadingptagcompleteregistrationshop'>Complete your registration</p>
                    </div>

                    <div className="wrapstepsdivnewbjd7734">
                        <div className="stepsdivmaincont">

                        <div className="emptyColorActiveStep"
                        style={{
                            backgroundColor:`${currentStep === 1 ? "#FFD700" : ""}`
                        }}
                        >
                            
                            </div>

                            <div className="cardsdivofstepscontainerIconAndCircleborderdiv"
                            style={{
                                borderColor:`${currentStep >= 1 && "#FFD700" }`
                            }}
                            >
                                <img src={currentStep >= 1 ? BellGlassy : listPng} alt='list' />
                            </div>
                            <div className="cardsdivofstepscontainer">
                                <p className='regstepscardheading'>Business/Store information</p>
                                <p className='regstepscarddescloc'>Name, location and contact number</p>
                            </div>
                        </div>
                       
                        <div className="linestepsdiv"
                        style={{
                            background : `${currentStep >=2 ? "#FFD700" : "#9197A6"}`
                        }}
                        >

                        </div>


                        <div className="stepsdivmaincont">
                        <div className="emptyColorActiveStep"
                        style={{
                            backgroundColor:`${currentStep === 2 ? "#FFD700" : ""}`
                        }}
                        >
                            
                            </div>
                            <div className="cardsdivofstepscontainerIconAndCircleborderdiv"
                             style={{
                                borderColor:`${currentStep >= 2 ? "#FFD700" : "#9197A6" }`
                            }}
                            >
                                <img src={currentStep >= 2 ? listGlassy : evaluationPng} alt='list' />
                            </div>
                            <div className="cardsdivofstepscontainer">
                                <p className='regstepscardheading'>Owner information</p>
                                <p className='regstepscarddescloc'>Name, location and contact number</p>
                            </div>
                        </div>
                        <div className="linestepsdiv"
                         style={{
                            background : `${currentStep >=3 ? "#FFD700" : "#9197A6"}`
                        }}
                        >

                        </div>

                        <div className="stepsdivmaincont">
                        <div className="emptyColorActiveStep"
                        style={{
                            backgroundColor:`${currentStep === 3 ? "#FFD700" : ""}`
                        }}
                        >
                            
                            </div>
                            <div className="cardsdivofstepscontainerIconAndCircleborderdiv"
                             style={{
                                borderColor:`${currentStep === 3 ? "#FFD700" : "#9197A6" }`
                            }}
                            >
                                <img src={currentStep === 3 ? FileGlassy : filePng} alt='list' />
                            </div>
                            <div className="cardsdivofstepscontainer">
                                <p className='regstepscardheading'>Upload Documents</p>
                                <p className='regstepscarddescloc'>Name, location and contact number</p>
                            </div>
                        </div>
                       

                    </div>

                </div>

                <div className="completeRegistrationStepsDiv jhccsdjhcsdjh63743"
                onClick={handleOpenDocModal}
                >
                    <img src={docsPngImage} alt='' />
                    <p className="documentsrequiredsidebutton">
                        Documents required for registration
                    </p>
                    <img src={arrowrightpng} alt='' />
                </div>

                <div className="completeRegistrationStepsDiv jhccsdjhcsdjh63743">
                    <p className="documentsrequiredsidebutton">
                    Did someone refer you to this platform?
                    </p>
                    <p className="documentsrequiredsidebutton hdcjhsdcjdc4634673">Yes</p>
                </div>

            </div>

            <div className="anothermaindivfordisplayflexregistration">
                <p className='bussinessnameregheadingclass'>Business/Store information</p>

{
    currentStep === 1 && (
        <>
        
        
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
                <img src={searchImgIcon} alt='searchImgIcon' className='jhbcjdhbfvjf473873' />
                <input type="text" className="newinputsearchlocinmapinput" placeholder='Search for area, street name ' />
            </div>
            <div className="currentlocaltionmmaindivbutton">
                <div className="currentlocbutton">
                    <img src={GroupCurrentMark} className='currentimgloc' alt='GroupCurrentMark' />
                    <p className='currentparatxtloc'>Use current location</p>
                </div>
            </div>
        </div>
        <img src={mapBG} alt="" srcset="" className='gvhgvhgvhg656576' />

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
</>
    )
}
               
{
    currentStep === 2 && (
<>
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
                            <img className='indianFlagImg' src={IndiaFlag} alt='IndiaFlag' />
                            <p className='pluscontrycodepara'>+91</p>
                            <img src={dropdownimg} alt="" className="dropdownarrow" />
                        </div>
                        <input className='shopNameclassnameforbussinessregistration phoneinputnewWidth' type="text" name="shopName" id="" placeholder='   Phone number*' />
                    </div>


                    <div className="bussinessstorenameinputdiv">
                        <p className="headingptagforbussinessregistration">
                        Business/Store’s primary contact number
                        </p>
                        <p className="descriptionptagforbussinessregistration">
                        Customers, delivery partners my call on this number for order support              </p>
                    </div>

                    <div className="bussinessstorenameinputdiv">
                        <div className="chockboxdivsameasowner shopNameclassnameforbussinessregistration newheightforcheckboxdivshop">
                            <Checkbox style={{
                                marginLeft: "20px"
                            }}> Same as owner mobile number</Checkbox>
                        </div>

                    </div>

                    <div className="bussinessstorenameinputdiv newdiplayflexonlyforthisdiv">
                        <div className='shopNameclassnameforbussinessregistration phonecuntryinputcode'>
                            <img className='indianFlagImg' src={IndiaFlag} alt='IndiaFlag' />
                            <p className='pluscontrycodepara'>+91</p>
                            <img src={dropdownimg} alt="" className="dropdownarrow" />
                        </div>
                        <input className='shopNameclassnameforbussinessregistration phoneinputnewWidth' type="text" name="shopName" id="" placeholder='   Phone number*' />
                    </div>

                </div>

               
</>

    )
}

             


{
    currentStep === 3 && (
        <div className="bussinessstorenamecompdivcard">
        <div className="headingsubdivforcardregistrationbussiness">
            <p className="headingptagforbussinessregistration">
                Upload Documents
            </p>
            <p className="descriptionptagforbussinessregistration">
                Will Verify All Documents               </p>
        </div>
        <div className="bussinessstorenameinputdiv">
            <input className='shopNameclassnameforbussinessregistration' type="text" name="shopName" id="" placeholder='   Upload PAN card' />
            <input className='shopNameclassnameforbussinessregistration' type="text" name="shopName" id="" placeholder='   Upload FSSAI license' />
            <input className='shopNameclassnameforbussinessregistration' type="text" name="shopName" id="" placeholder='   Upload Bank Account details' />
            <input className='shopNameclassnameforbussinessregistration' type="text" name="shopName" id="" placeholder='   Upload GST number, if applicable' />
            <input className='shopNameclassnameforbussinessregistration' type="text" name="shopName" id="" placeholder='   Upload Images' />
        </div>
    </div>
    )
}
           
                <div className="buttonnextdiv">
                    {
                        currentStep !== 1 && (
                            <button className='nextactualbutton' onClick={handleprevclick}>Previous</button>
                        )
                    }
                  
                        <button className='nextactualbutton' onClick={handlenextclick}>Next</button>
                   
                   
                </div>


            </div>
        </div>


{
    <Modal
className='newAntdModalForDocModal'
    open={openDocModal}
    onCancel={()=>setOpenDocModal(false)}
    footer={null}
    >
<div className="modalmaincontfordocmodal">
    <div className="imgmodaldochead">
        <img src={docimageheadingvector} alt="" />
    </div>
    <div className="othercontaintmaindiv">
        <p className='readyDocumentsHead'>Please be ready with the following for a smooth registration</p>

        <div className="documentstypecontentdiv">
<img src={checkedCircle} alt=''/>
<p className='dhgcvsdch43783743'>Pan Card</p>
        </div>
        <div className="documentstypecontentdiv">
<img src={checkedCircle} alt=''/>
<p className='dhgcvsdch43783743'>FSSAI license</p>
        </div>
        <div className="documentstypecontentdiv">
<img src={checkedCircle} alt=''/>
<p className='dhgcvsdch43783743'>Bank Account details</p>
        </div>
        <div className="documentstypecontentdiv">
<img src={checkedCircle} alt=''/>
<p className='dhgcvsdch43783743'>GST number, if applicable</p>
        </div>
        <div className="documentstypecontentdiv">
<img src={checkedCircle} alt=''/>
<p className='dhgcvsdch43783743'>Images</p>
        </div>
      
    </div>
    <div className="OkayButtonDivModalDoc">
        <button className="okaybuttondocumentredymodal"
        onClick={()=> setOpenDocModal(false)}
        >
            Okay
        </button>
    </div>
</div>
    </Modal>
}

        </>
  
    )
}

export default RegisterShopComp
