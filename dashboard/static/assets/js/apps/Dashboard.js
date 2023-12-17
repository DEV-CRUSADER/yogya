import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomeView } from '../components/dashboard/App';

export function Dashboard() {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/hello" element={<HomeView />} />
        </Routes>
    );
};