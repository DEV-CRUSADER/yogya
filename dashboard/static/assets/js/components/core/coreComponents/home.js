import React, { useState, useEffect, useRef } from 'react';
import { TabTitle } from "../scripts/general_function";

// API CALLER
import { APICaller } from "../scripts/server";



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
        
            <h1>Home
                
            </h1>

        </>
    );
}
