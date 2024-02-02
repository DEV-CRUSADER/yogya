import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  HomePageView,
  ResourcesPageView,
  MutualPageView,
  ContactPageView,
  ClientAuthView,
} from "../components/core/App";
import { Navbar } from "../components/core/coreComponents/navbar";


export function CoreApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/resources" element={<ResourcesPageView />} />
        <Route path="/mutual-funds" element={<MutualPageView />} />
        <Route path="/contact" element={<ContactPageView />} />

        <Route path="/register" element={<ClientAuthView formType="register"/>} />
        <Route path="/login" element={<ClientAuthView formType="login"/>} />
        <Route path="/password-reset" element={<ClientAuthView formType="password-reset"/>} />
        

      </Routes>
    </>
  );
}
