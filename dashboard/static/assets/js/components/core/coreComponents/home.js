import React, { useState, useEffect, useRef } from 'react';
import { TabTitle } from "../scripts/general_function";

import { Hero } from './home/hero';
import { Disclaimer } from './home/disclaimer';
import { WhyUs } from './home/whyus';
import { PersonHero } from './home/personHero';
import { Footer } from './footer';

export function Home() {
    TabTitle('Yogya Capital')
    document.body.style.overflowY = "auto";

    return (
        <>
            <Hero />
            <WhyUs />
            <PersonHero />
            <Disclaimer />
            <Footer />
        </>
    );
}
