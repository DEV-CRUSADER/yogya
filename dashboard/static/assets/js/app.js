import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider, } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import AOS from 'aos';

import { Dashboard } from './apps/Dashboard';
import { CoreApp } from './apps/CoreApp';

import 'aos/dist/aos.css';

const queryClient = new QueryClient();
AOS.init();

function App() {

    // Get subdomain
    const subdomain = window.location.host.split('.')[0];

    return (
        <>
            <QueryClientProvider client={queryClient}>
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
                <BrowserRouter>
                    <Routes>
                        {/* Define routes based on subdomain */}
                        {subdomain === 'dashboard' && <Route path="*" element={<Dashboard />} />}

                        {/* Default route */}
                        <Route path="*" element={<CoreApp />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </>
    );
};

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));
