import React, { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";

import { WebLoader } from "../components/common/utils/loader";

// Lazy load the components
const HomePageView = lazy(async () => await import("../components/core/App").then((module) => ({ default: module.HomePageView })));
const ResourcesPageView = lazy(async () => await import("../components/core/App").then((module) => ({ default: module.ResourcesPageView })));
const MutualPageView = lazy(async () => await import("../components/core/App").then((module) => ({ default: module.MutualPageView })));
const ContactPageView = lazy(async () => await import("../components/core/App").then((module) => ({ default: module.ContactPageView })));
const ClientAuthView = lazy(async () => await import("../components/core/App").then((module) => ({ default: module.ClientAuthView })));


import { ClientData } from "../components/dashboard/client_elements/form";

export function CoreApp() {
    return (
        <Routes>
                <Route path="/" element={
                    <Suspense fallback={<WebLoader />}>
                        <HomePageView />
                    </Suspense>
                } />
                <Route path="/mutual-funds" element={
                    <Suspense fallback={<WebLoader />}>
                        <MutualPageView />
                    </Suspense>
                } />
                <Route path="/resources" element={
                    <Suspense fallback={<WebLoader />}>
                        <ResourcesPageView />
                    </Suspense>
                } />
                <Route path="/contact" element={
                    <Suspense fallback={<WebLoader />}>
                        <ContactPageView />
                    </Suspense>
                } />
                <Route path="/register" element={
                    <Suspense fallback={<WebLoader />}>
                        <ClientAuthView formType="register" />
                    </Suspense>
                } />
                <Route path="/login" element={
                    <Suspense fallback={<WebLoader />}>
                        <ClientAuthView formType="login" />
                    </Suspense>
                } />
                <Route path="/password-reset" element={
                    <Suspense fallback={<WebLoader />}>
                        <ClientAuthView formType="password-reset" />
                    </Suspense>
                } />
        </Routes>
    );
}