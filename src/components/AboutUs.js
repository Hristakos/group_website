import React from "react";
import theImage from "../images/2020.jpg";
import "../styles/AboutUs.css";

export default function AboutUs(props) {
    return (
        <div className="card-aboutus-wrapper">
            <img className="card-aboutus-image" src={theImage} alt="" />
            <div className="div-wrapper">
                <h3 className="card-aboutus-personName">{props.personName}</h3>
                <h3 className="card-aboutus-jobTitle">{props.jobTitle}</h3>
                <p className="card-aboutus-content">{props.content}</p>
            </div>
        </div>
    );
}