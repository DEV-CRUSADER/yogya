import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  HomePageView,
  ResourcesPageView,
  MutualPageView,
  ContactPageView,
} from "../components/core/App";
import { Navbar } from "../components/core/coreComponents/navbar";
import { Footer } from "../components/core/coreComponents/footer";

import { ClientData } from "../components/dashboard/client_elements/form";

export function CoreApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/resources" element={<ResourcesPageView />} />
        <Route path="/mutual-funds" element={<MutualPageView />} />
        <Route path="/contact" element={<ContactPageView />} />

        {/* temporary */}
        <Route path="/forms" element={<ClientForm></ClientForm>} />

      </Routes>
      <Footer />
    </>
  );
}

export function ClientForm() {
  return (
    <div className="p-3">
      <ClientData />
    </div>
  )
}
