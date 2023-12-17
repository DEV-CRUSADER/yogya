import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter , Route, Routes } from 'react-router-dom';


import { Dashboard } from './apps/Dashboard';
import { CoreApp } from './apps/CoreApp';

function App() {

    // Extract the subdomain from the URL
    const subdomain = window.location.host.split('.')[0];

    return (
        <BrowserRouter>
            <Routes>
                {/* Define routes based on subdomain */}
                {subdomain === 'dashboard' && <Route path="*" element={<Dashboard />} />}

                {/* Default route */}
                <Route path="*" element={<CoreApp />} />
            </Routes>
        </BrowserRouter>
    );
};

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));
