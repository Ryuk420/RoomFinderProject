import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to find all students <br />
            the best home to live for them<br/>
            while they study peacefully.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Copyright</span>
          <span className="secondaryText">@JLad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
