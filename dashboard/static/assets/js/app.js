import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AOS from "aos";

import { NextUIProvider } from "@nextui-org/react";

import { WebLoader } from "./components/common/utils/loader";

const Dashboard = lazy(
    async () =>
        await import("./apps/Dashboard").then((module) => ({
            default: module.Dashboard,
        }))
);
const CoreApp = lazy(
    async () =>
        await import("./apps/CoreApp").then((module) => ({
            default: module.CoreApp,
        }))
);

import "aos/dist/aos.css";
import "../../css/style.css";

const queryClient = new QueryClient();
AOS.init();

function App() {
    // Get subdomain
    const subdomain = window.location.host.split(".")[0];

    return (
        <BrowserRouter>
            <Routes>
                {/* Define routes based on subdomain */}
                {subdomain === "dashboard" && (
                    <Route
                        path="*"
                        element={
                            <React.Suspense fallback={<WebLoader />}>
                                <Dashboard />
                            </React.Suspense>
                        }
                    />
                )}

                {/* Default route */}
                <Route
                    path="*"
                    element={
                        <React.Suspense fallback={<WebLoader />}>
                            <CoreApp />
                        </React.Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        <NextUIProvider>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            <App />
        </NextUIProvider>
    </QueryClientProvider>
);

// const domContainer = document.querySelector("#root");
// const root = ReactDOM.createRoot(domContainer);
// root.render(React.createElement(App));
