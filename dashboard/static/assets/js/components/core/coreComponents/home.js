import React from 'react';


import { Hero } from './home/hero';
import { Disclaimer } from './home/disclaimer';
import { WhyUsSectionWrapper } from './home/whyus';
import { PersonHero } from './home/personHero';
import { Footer } from './footer';

export function Home() {
    
    document.body.style.overflowY = "auto";

    return (
        <>
            <Hero />
            <WhyUsSectionWrapper />
            <PersonHero />
            <Disclaimer />
            <Footer />
        </>
    );
}
