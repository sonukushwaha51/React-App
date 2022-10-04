import { NavLink } from "react-router-dom";
import React from "react";
import HeaderComponent from "./HeaderComp";
import FooterComponent from "./FooterComp";

function Contact() {
    return(
        <React.Fragment>
            <HeaderComponent />
            <div className="contact-us-main-block">
                <div className="company-details">
                    <p className="company-name-heading">Company Name</p>
                    <p className="company-name-text">ABC Book Store</p>
                    <p className="Contact no.">+91 98437637543</p>
                    <p className="company-address">Lincoln road, Matunga, Dadar, Mumbai - 400012</p>
                    <p className="company-locations">Mumbai, Bangalore, Chennai, Ahemedabad</p>
                </div>
            </div>
            <FooterComponent />
        </React.Fragment>
    );
}

export default Contact;