import React from "react"

import { DummyText } from "../../dummyText"


//importing css
import { CSS } from "../../../../../../css/home.css";


export function Hero() {

    return (
        <>
            <div className='hero-section'>
                <section className='container'>
                    <h1>Home</h1>
                    <DummyText />
                </section>
            </div>
            <div className='hero-section-2'>
                <section className='container'>
                    <h1>Home</h1>
                    <DummyText />
                </section>
            </div>
        </>
    )
}

