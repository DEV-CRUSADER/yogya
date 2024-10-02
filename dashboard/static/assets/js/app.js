import React, { lazy } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider, } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import AOS from 'aos';


import { WebLoader } from './components/common/utils/loader';

const DashboardApp = lazy(async () => await  import("./apps/Dashboard").then((module) => ({ default: module.Dashboard })));
const CoreApp = lazy(async () => await  import("./apps/CoreApp").then((module) => ({ default: module.CoreApp })));

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
                        {subdomain === 'dashboard' && <Route path="*" element={
                            <React.Suspense fallback={<WebLoader />}>
                                <DashboardApp />
                            </React.Suspense>
                        }/>}

                        {/* Default route */}
                        <Route path="*" element={
                            <React.Suspense fallback={<WebLoader />}>
                                <CoreApp />
                            </React.Suspense>
                        } />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </>
    );
};

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));
