import React from 'react';
import { BrowserRouter , Route, Routes, HashRouter } from 'react-router-dom';

import { HomePageView } from '../components/core/App';
import AboutUsPageView from '../components/core/coreComponents/about';
import Navbar from '../components/core/coreComponents/navbar';

export function CoreApp() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePageView />} />
            </Routes>
        </>
    );
};