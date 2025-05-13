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


import { Checkbox, Modal, Radio } from 'antd'
import axios from 'axios'
import { toast } from 'react-toastify'
import { API_BASE_URL } from '../apis/api'

const RegisterShopComp = () => {

    const [formData, setFormData] = useState({
        shopName: '',
        businessType: '',
        pickupLocation: {
            latitude:'',
            longitude:''
        },
        shopNumber:'',
        floorNumber:'',
        shopArea: '',
        shopCity: '',
        shopLandmark: '',
        owner:{
            name:'',
            email:'',
            phone:'',
            storePrimaryPhone:'',
            password:''
        },
        panCard: '',
        fssaiLicense: '',
        bankDetails: '',
        shopImages: '',
    });
    
    const [currentStep , setCurrentStep] = useState(1);
    const [openDocModal , setOpenDocModal] = useState(false);
    const options = [
        { label: 'Grocery', value: 'Grocery' },
        { label: 'Fashion', value: 'Fashion' },
        { label: 'Food', value: 'Food' },
      ];
      
const handlenextclick = async()=>{
    if (currentStep === 3) {
        try {
            const data = new FormData();
            data.append('shopName', formData.shopName);
            data.append('businessType', formData.businessType);
            data.append('shopNumber', formData.shopNumber);
            data.append('floorNumber', formData.floorNumber);
            data.append('shopArea', formData.shopArea);
            data.append('shopCity', formData.shopCity);
            data.append('shopLandmark', formData.shopLandmark);
        
            data.append('owner[name]', formData.owner.name);
            data.append('owner[email]', formData.owner.email);
            data.append('owner[phone]', formData.owner.phone);
            data.append('owner[storePrimaryPhone]', formData.owner.storePrimaryPhone);
            data.append('owner[password]', formData.owner.password);
        
            data.append('pickupLocation[latitude]', formData.pickupLocation.latitude);
            data.append('pickupLocation[longitude]', formData.pickupLocation.longitude);
  
              data.append('panCard', formData.panCard[0]);
      
              data.append('fssaiLicense', formData.fssaiLicense[0]);
            
              data.append('bankDetails', formData.bankDetails[0]); // string is fine if backend expects text
            
            if (formData.shopImages) {
              if (Array.isArray(formData.shopImages)) {
                formData.shopImages.forEach((image) => {
                  data.append('shopImages', image);
                });
              } else {
                data.append('shopImages', formData.shopImages);
              }
            }
        
            console.log(data);
            
            const response = await axios.post(`${API_BASE_URL}/api/auth/register`, data);
            if (response.status === 201) {
                toast.success(response.data.message);
            }else{
                toast.error("Something went wrong");
            }
            
          } catch (error) {
            toast.error(error);
          }
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
const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
};

const handleNestedChange = (e, parentKey) => {
    const { name, value } = e.target;

    setFormData(prev => ({
        ...prev,
        [parentKey]: {
            ...prev[parentKey],
            [name]: value
        }
    }));
};

const handleBusinessTypeChange = (value) => {
    setFormData(prev => ({
        ...prev,
        businessType: value
    }));
};

const handleGetCurrentLocation = ()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            formData.pickupLocation.latitude = position.coords.latitude;
            formData.pickupLocation.longitude = position.coords.longitude;
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        alert('Geolocation is not supported by your browser.');
      }
}
const handleFileUploads = (e)=>{
    const { name, files } = e.target;
    const fileList = Array.from(files); // multiple files

    setFormData(prev => ({
        ...prev,
        [name]: fileList, // array of files
    }));
}
console.log(formData);

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
            <input className='shopNameclassnameforbussinessregistration' type="text" name="shopName" id="" placeholder='   Bussiness / Store Name' value={formData.shopName} onChange={handleChange}/>
        </div>

        <div className="headingsubdivforcardregistrationbussiness">
            <p className="headingptagforbussinessregistration">
                Bussiness Type
            </p>
            <p className="descriptionptagforbussinessregistration">
                Select A Bussiness Type                    </p>
        </div>
        <Radio.Group block options={options} defaultValue="Apple" style={{
            marginTop:"20px"
        }} value={formData.businessType}
        onChange={(e) => handleBusinessTypeChange(e.target.value)}/>
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
                    <p className='currentparatxtloc' onClick={handleGetCurrentLocation}>Use current location</p>
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
            <input className='shopNameclassnameforbussinessregistration newwidthforfirstnameofowner' type="text" name="shopNumber" id="" placeholder='   Shop no. / building no. (optional)' value={formData.shopNumber}
  onChange={handleChange} />
            <input className='shopNameclassnameforbussinessregistration newwidthforfirstnameofowner' type="text" name="floorNumber" id="" placeholder='   Floor / tower (optional)' value={formData.floorNumber}
  onChange={handleChange}/>
        </div>

        <div className="bussinessstorenameinputdiv newdiplayflexonlyforthisdiv fvbjhsakcsdhb84223">
            <input className='shopNameclassnameforbussinessregistration newwidthforfirstnameofowner' type="text" name="shopArea" id="" placeholder='   Area / Sector / Locality*' value={formData.shopArea}
  onChange={handleChange}/>
            <input className='shopNameclassnameforbussinessregistration newwidthforfirstnameofowner' type="text" name="shopCity" id="" placeholder='   City' value={formData.shopCity}
  onChange={handleChange}/>
        </div>

        <div className="bussinessstorenameinputdiv fvbjhsakcsdhb84223">
            <input className='shopNameclassnameforbussinessregistration' type="text" name="shopLandmark" id="" placeholder='   Add any nearby landmark (optional)' value={formData.shopLandmark}
  onChange={handleChange}/>
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
                        <input className='shopNameclassnameforbussinessregistration newwidthforfirstnameofowner' type="text" id="" placeholder='   Full name*' name="name"
  value={formData.owner.name}
  onChange={(e) => handleNestedChange(e, 'owner')}/>
                        <input className='shopNameclassnameforbussinessregistration newwidthforfirstnameofowner' type="text" id="" placeholder='   Email address*' name="email"
  value={formData.owner.email}
  onChange={(e) => handleNestedChange(e, 'owner')}/>
                    </div>

                    <div className="bussinessstorenameinputdiv newdiplayflexonlyforthisdiv">
                        <div className='shopNameclassnameforbussinessregistration phonecuntryinputcode'>
                            <img className='indianFlagImg' src={IndiaFlag} alt='IndiaFlag' />
                            <p className='pluscontrycodepara'>Password</p>
                        </div>
                        <input className='shopNameclassnameforbussinessregistration phoneinputnewWidth' type="text" id="" placeholder='   Enter Shop Password*' name="password"
  value={formData.owner.password}
  onChange={(e) => handleNestedChange(e, 'owner')}/>
                    </div>


                    <div className="bussinessstorenameinputdiv newdiplayflexonlyforthisdiv">
                        <div className='shopNameclassnameforbussinessregistration phonecuntryinputcode'>
                            <img className='indianFlagImg' src={IndiaFlag} alt='IndiaFlag' />
                            <p className='pluscontrycodepara'>+91</p>
                            <img src={dropdownimg} alt="" className="dropdownarrow" />
                        </div>
                        <input className='shopNameclassnameforbussinessregistration phoneinputnewWidth' type="text" id="" placeholder='   Phone number*' name="phone"
  value={formData.owner.phone}
  onChange={(e) => handleNestedChange(e, 'owner')}/>
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
                        <input className='shopNameclassnameforbussinessregistration phoneinputnewWidth' type="text" id="" placeholder='   Phone number*' name="storePrimaryPhone"
  value={formData.owner.storePrimaryPhone}
  onChange={(e) => handleNestedChange(e, 'owner')}/>
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
            <input className='shopNameclassnameforbussinessregistration' type="file" name="panCard" id="" placeholder='   Upload PAN card' onChange={handleFileUploads}/>
            <input className='shopNameclassnameforbussinessregistration' type="file" name="fssaiLicense" id="" placeholder='   Upload FSSAI license' onChange={handleFileUploads}/>
            <input className='shopNameclassnameforbussinessregistration' type="file" name="bankDetails" id="" placeholder='   Upload Bank Account details' onChange={handleFileUploads}/>
            <input className='shopNameclassnameforbussinessregistration' type="file" name="shopImages" id="" placeholder='   Upload GST number, if applicable' onChange={handleFileUploads} multiple/>
          
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
                  
                        <button className='nextactualbutton' onClick={handlenextclick}> {currentStep === 3 ? "submit" : "Next"}</button>
                   
                   
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
