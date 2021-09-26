import React from "react";
import "./HiringDetails.css";

const HiringDetails = (props) => {
    const { name, cost } = props.hired;
    return (
        <div className="hiring-details">
            <h1>Total Hiring Details</h1>

            <h3>Programmer Added : {0}</h3>
            <h3>Total Cost : {1200}</h3>
            <h3>Hired </h3>

            <ul>
                <li>Hasin</li>
                <li>Jhankar</li>
            </ul>
        </div>
    );
};

export default HiringDetails;
