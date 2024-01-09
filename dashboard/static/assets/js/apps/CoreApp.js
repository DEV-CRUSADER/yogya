import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  HomePageView,
  ResourcesPageView,
  MutualPageView,
  ContactPageView,
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
      </Routes>
    </>
  );
}
