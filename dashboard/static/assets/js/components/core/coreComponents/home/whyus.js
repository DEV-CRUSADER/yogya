import React from "react";

import {CSS} from "../../../../../../css/home.css";
import theGame from "../../../../../img/skinIntheGame.png";


export function WhyUs (){
    return(
        <>
        <div className="hero-section-3">
        <h1>WHY US?</h1>
        <div>
            <img src = {theGame} alt="skinIntheGame"  />
        </div>

        </div>
        </>
    );

}