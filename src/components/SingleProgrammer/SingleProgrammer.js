import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SingleProgrammer.css";

function SingleProgrammer(props) {
    // destructure programmer from props
    const { name, expertise, age, country, cost, photo } = props.programmer;
    return (
        // single programmer profile
        <div className="single-programmer">
            <img className="dev-img" src={photo} alt="" />
            <h3>{name}</h3>
            <h4>Expertise : {expertise}</h4>
            <h4>Age : {age}</h4>
            <h4>Country : {country}</h4>
            <h4>Cost : ${cost}</h4>
            <button
                onClick={() => props.HandleHiringProcces(props.programmer)}
                className="hiring-btn"
            >
                <FontAwesomeIcon icon={faArrowAltCircleRight} /> Hire Now
            </button>
        </div>
    );
}

export default SingleProgrammer;
