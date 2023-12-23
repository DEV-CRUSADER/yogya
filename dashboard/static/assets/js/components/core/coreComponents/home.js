import React, { useState, useEffect, useRef } from 'react';
import { TabTitle } from "../scripts/general_function";

import { Hero } from './home/hero';
import { Disclaimer } from './home/disclaimer';



//importing css
import { CSS } from "../../../../../css/home.css";



export function Home() {
    TabTitle('Yogya Capital')

    return (
        <>
            <Hero />
            <Disclaimer />
        </>
    );
}
