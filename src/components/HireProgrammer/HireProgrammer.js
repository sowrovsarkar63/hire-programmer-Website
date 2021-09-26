import React, { useEffect, useState } from "react";
import HiringDetails from "../HiringDetails/HiringDetails";
import SingleProgrammer from "../SingleProgrammer/SingleProgrammer";
import "./HireProgrammer.css";
const HireProgrammer = () => {
    // declear state here
    const [singleProgrammer, setProgrammer] = useState([]);
    const [hired, setWhoHired] = useState([]);

    /* Load data from json file  */
    useEffect(() => {
        fetch("./programmerList.JSON")
            .then((res) => res.json())
            .then((data) => setProgrammer(data));
    }, []);

    /* It will handle hire now buttn and set in the new state  */
    const HandleHiringProcces = (programmer) => {
        const NewHire = [...hired, programmer];
        setWhoHired(NewHire);
    };

    return (
        <section className="container">
            <div className="programmer-container">
                {/* Display single programmer and their profile  */}
                {singleProgrammer.map((programmer) => (
                    <SingleProgrammer
                        key={programmer.key}
                        programmer={programmer}
                        HandleHiringProcces={HandleHiringProcces}
                    ></SingleProgrammer>
                ))}
            </div>

            {/* Details Section  */}
            <section className="Cart">
                <HiringDetails hired={hired}></HiringDetails>
            </section>
        </section>
    );
};

export default HireProgrammer;
