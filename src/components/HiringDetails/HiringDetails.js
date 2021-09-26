import React from "react";
import "./HiringDetails.css";

const HiringDetails = (props) => {
    //distructure the props
    const { hired } = props;

    /* Upadte total cost  */
    let totalCost = 0;
    for (const HireDetails of hired) {
        totalCost = totalCost + HireDetails.cost;
    }
    return (
        // hiring details section
        <div className="hiring-details">
            <h1>Total Hiring Details</h1>

            <h3>Programmer Added : {hired.length}</h3>
            <h3>Total Cost : ${totalCost}</h3>
            <h3>Hired List</h3>
            {/* Show the name who actually hired  */}
            <ul>
                {hired.map((devName) => (
                    <li key={devName.key}>{devName.name}</li>
                ))}
            </ul>

            {/* details button   */}
            <button className="cart-btn">Calculate & Hire</button>
        </div>
    );
};

export default HiringDetails;
