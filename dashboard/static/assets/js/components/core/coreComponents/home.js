import React, { useState, useEffect, useRef } from 'react';
import { TabTitle } from "../scripts/general_function";

// API CALLER
import { APICaller } from "../scripts/server";



// For testing
import { DummyText } from "../dummyText";



export function Home() {
    TabTitle('Yogya Capital')

    return (
        <>
        <section className='container'>
            <h1>Home</h1>
            <DummyText />
        </section>

        </>
    );
}
