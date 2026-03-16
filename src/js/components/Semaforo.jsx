import React, { useState } from "react";

const Semaforo = () => {
    // Declaramos el estado. Por defecto, ninguna luz brilla (o puedes poner "red")
    const [color, setColor] = useState("rojo");

    return (
        <div className="container">
            <div className="poste"></div>
            <div className="traffic-light">
                
                <div
                    onClick={() => setColor("rojo")}
                    className={"luz rojo" + (color === "rojo" ? " brilla" : "")}>
                </div>

                
                <div
                    onClick={() => setColor("amarillo")}
                    className={"luz amarillo" + (color === "amarillo" ? " brilla" : "")}>
                </div>

                
                <div
                    onClick={() => setColor("verde")}
                    className={"luz verde" + (color === "verde" ? " brilla" : "")}>
                </div>
            </div>
        </div>
    );
};

export default Semaforo;