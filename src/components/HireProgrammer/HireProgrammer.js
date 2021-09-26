import React, { useEffect, useState } from "react";
import SingleProgrammer from "../SingleProgrammer/SingleProgrammer";
import "./HireProgrammer.css";
const HireProgrammer = () => {
    const [singleProgrammer, setProgrammer] = useState([]);
    const [hired, setWhoHired] = useState([]);

    useEffect(() => {
        fetch("./programmerList.JSON")
            .then((res) => res.json())
            .then((data) => setProgrammer(data));
    }, []);

    const HandleHiringProcces = (programmer) => {
        const NewHire = [...hired, programmer];
        setWhoHired(NewHire);
    };
    return (
        <section className="container">
            <div className="programmer-container">
                {singleProgrammer.map((programmer) => (
                    <SingleProgrammer
                        key={programmer.key}
                        programmer={programmer}
                        HandleHiringProcces={HandleHiringProcces}
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
