import React, { useState, useEffect, useRef } from 'react';
import { TabTitle } from "../scripts/general_function";

import { Hero } from './home/hero';
import { Disclaimer } from './home/disclaimer';
import { WhyUs } from './home/whyus';
import { PersonHero } from './home/personHero';


//importing css
import { CSS } from "../../../../../css/home.css";


export function Home() {
    TabTitle('Yogya Capital')

    return (
        <>
            <Hero />
            {/* <div 
                className="container-fluid d-flex justify-content-center align-items-center"
            >
                <hr
                    className="border-3 border-dark opacity-25"
                    style={{
                        width: "80%",
                    }}
                />
            </div> */}
            <WhyUs />
            <PersonHero />
            <Disclaimer />

        </>
    );
}
