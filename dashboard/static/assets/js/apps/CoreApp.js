import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomeView } from '../components/core/App';

export function CoreApp() {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
        </Routes>
    );
};