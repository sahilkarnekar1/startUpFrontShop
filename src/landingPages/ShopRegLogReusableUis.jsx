import React, { useState } from "react";
import "../landingPages/ShopRegLogReusableUis.css";
import registrationpageline1 from "../uiuxassets/registrationpageline1.png";
import registrationpageline2 from "../uiuxassets/registrationpageline2.png";
import googleicon from "../uiuxassets/googleicon.png";
import facebookicon from "../uiuxassets/facebookicon.png";
import xicon from "../uiuxassets/xicon.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../apis/api";
import { Spin } from "antd";

const ShopRegLogReusableUis = ({ title }) => {

  const [loading, setLoading] = useState(false);

  const [formData,setFormData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();

  const handleLogin = async()=>{
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, formData);
      console.log(response.data);
      if(response.status === 201){
        localStorage.setItem("token", response.data.token);
        toast.success("Login Successful");
        navigate("/dashboard");
      }else{
        toast.error("Login Failed");
      }
    } catch (error) {
      toast.error("Login error:", error);
    }finally{
      setLoading(false)
    }
  
  }

  return (<>
   <div className="regLogUisMainComp">
      <div className="regLogUisSubDiv">
        <h4 className="regLogUisMainCompTitle">Login</h4>
        <input
          className="regLogUisMainCompinputStyles"
          type="text"
          name="email"
          id=""
          placeholder="  Enter Email ID"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          className="regLogUisMainCompinputStyles"
          type="password"
          name="password"
          id=""
          placeholder="  Enter Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button className="regLogUisMainCompButton" onClick={handleLogin}>Login</button>
        <div className="regLogUisMainCompregistrationpageline">
          <img
            className="regLogUisMainCompregistrationpageline1"
            src={registrationpageline1}
            alt="c3"
          />
          <h2 className="regLogUisMainCompOR">OR</h2>
          <img
            className="regLogUisMainCompregistrationpageline2"
            src={registrationpageline2}
            alt="c3"
          />
        </div>
        <div className="regLogUisMainCompaccounts">
          <img
            className="regLogUisMainCompIcon"
            src={googleicon}
            alt="Google"
          />
          <img
            className="regLogUisMainCompIcon"
            src={facebookicon}
            alt="Facebook"
          />
          <img className="regLogUisMainCompIcon" src={xicon} alt="Twitter" />
        </div>
        <p className="regLogUisLoginText">
         Don't have an account?
          <Link to={"/registerShop"}><span className="regLogUisLoginLink"> Register Shop</span></Link>
        </p>
      </div>
    </div>

    {loading && (
        <div className="loaderstylingadjustmentclass">
          <Spin size="large" />
        </div>
      )}
  </>
   

  );
};

export default ShopRegLogReusableUis;
