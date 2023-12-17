import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePageView, ResourcesPageView } from '../components/core/App';
import Navbar from '../components/core/coreComponents/navbar';

export function CoreApp() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePageView />} />
                <Route path="/resources" element={<ResourcesPageView />} />
            </Routes>
        </>
    );
};