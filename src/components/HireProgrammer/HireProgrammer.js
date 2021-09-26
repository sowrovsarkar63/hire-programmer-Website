import React, { useEffect, useState } from "react";
import HiringDetails from "../HiringDetails/HiringDetails";
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
            <section className="Cart">
                <HiringDetails hired={hired}></HiringDetails>
            </section>
        </section>
    );
};

export default HireProgrammer;
