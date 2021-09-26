import React, { useEffect, useState } from "react";
import SingleProgrammer from "../SingleProgrammer/SingleProgrammer";
import "./HireProgrammer.css";
const HireProgrammer = () => {
    const [singleProgrammer, setProgrammer] = useState([]);
    useEffect(() => {
        fetch("./programmerList.JSON")
            .then((res) => res.json())
            .then((data) => setProgrammer(data));
    }, []);
    return (
        <section className="container">
            <div className="programmer-container">
                {singleProgrammer.map((programmer) => (
                    <SingleProgrammer
                        key={programmer.key}
                        programmer={programmer}
                    ></SingleProgrammer>
                ))}
            </div>
            <section className="cart-section">
                <h2>Cart</h2>
            </section>
        </section>
    );
};

export default HireProgrammer;
