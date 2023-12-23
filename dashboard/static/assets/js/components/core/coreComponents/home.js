import React, { useState, useEffect, useRef } from 'react';
import { TabTitle } from "../scripts/general_function";

// API CALLER
import { APICaller } from "../scripts/server";



// For testing
import { DummyText } from "../dummyText";

//importing css
import {CSS} from "../../../../../css/home.css";



export function Home() {
    TabTitle('Yogya Capital')


    const [indexData, setIndexData] = useState({});

    useEffect(() => {
        APICaller.FetchDefaultIndexData().then((res) => {
            setIndexData(res);
        });
    }, []);


    return (
        <>
        <div className='hero-section'>
        <section className='container'>

            <h1>Home</h1>
            <DummyText />
        </section>
        </div>
        </>
    );
}
