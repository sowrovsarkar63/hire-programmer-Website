import React, { useEffect } from "react";
import "./HireProgrammer.css";
const HireProgrammer = () => {
    useEffect(() => {
        fetch("./programmerList.JSON")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    return (
        <section className="container">
            <div className="programmer-container">
                <div className="single-programmer">
                    <h2>Hasin Hayder</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque, soluta.
                    </p>
                </div>
            </div>
            <section className="cart-section">
                <h2>Cart</h2>
            </section>
        </section>
    );
};

export default HireProgrammer;
