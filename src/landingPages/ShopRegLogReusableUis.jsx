import React from "react";
import "../landingPages/ShopRegLogReusableUis.css";
import registrationpageline1 from "../uiuxassets/registrationpageline1.png";
import registrationpageline2 from "../uiuxassets/registrationpageline2.png";
import googleicon from "../uiuxassets/googleicon.png";
import facebookicon from "../uiuxassets/facebookicon.png";
import xicon from "../uiuxassets/xicon.png";

const ShopRegLogReusableUis = ({ title }) => {
  return (
    <div className="regLogUisMainComp">
      <div className="regLogUisSubDiv">
        <h4 className="regLogUisMainCompTitle">Registration</h4>
        <input
          className="regLogUisMainCompinputStyles"
          type="text"
          name=""
          id=""
          placeholder="  Create User ID"
        />
        <input
          className="regLogUisMainCompinputStyles"
          type="text"
          name=""
          id=""
          placeholder="  Enter Email ID"
        />
        <input
          className="regLogUisMainCompinputStyles"
          type="password"
          name=""
          id=""
          placeholder="  Enter Password"
        />
        <button className="regLogUisMainCompButton">Login</button>
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
          Already have an account?
          <span className="regLogUisLoginLink"> Login in</span>
        </p>
      </div>
    </div>
  );
};

export default ShopRegLogReusableUis;
