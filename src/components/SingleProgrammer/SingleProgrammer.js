import React from "react";
import "./SingleProgrammer.css";
function SingleProgrammer(props) {
    const { name, expertise, age, country, cost, photo } = props.programmer;
    return (
        <div className="single-programmer">
            <img className="dev-img" src={photo} alt="" />
            <h3>{name}</h3>
            <h4>Expertise : {expertise}</h4>
            <h4>Age : {age}</h4>
            <h4>Country : {country}</h4>
            <h4>Cost : ${cost}</h4>
        </div>
    );
}

export default SingleProgrammer;