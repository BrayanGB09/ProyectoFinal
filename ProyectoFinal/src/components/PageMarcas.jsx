import React from "react";
import Bticino from "../images/Bticino.png";
import FranklinElectric from "../images/FranklinElectric.png";
import Generac from "../images/Generac.png"
import Hubbell from "../images/Hubbell.png"
import PhelpsDodge from "../images/PhelpsDodge.png"
import Tecnolite from "../images/Tecnolite.png"
import '../styles/Marcas.css'

function PageMarcas() {
    return (
        <div>
            <h2>Estas son algunas de las marcas con las que trabajamos</h2>

            <div className="contenedorMarcas">
                <div>
                    
                    <img className="img" src={Bticino} alt="Bticino" />
              
                </div>

                <div>
                    
                    <img className="img" src={FranklinElectric} alt="FranklinElectric" />

                </div>

                <div>
                    <img className="img" src={Generac} alt="Generac" />
            
                </div>

                <div>
                    
                    <img className="img" src={Hubbell} alt="Hubbell" />

                </div>

                <div>
                   
                    <img className="img" src={PhelpsDodge} alt="PhelpsDodge" />
 
                </div>

                <div>
                    
                    <img className="img" src={Tecnolite} alt="Tecnolite" />

                </div>
            </div>
        </div>
    )
}

export default PageMarcas