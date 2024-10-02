import React from "react";

import Navbar from "./coreComponents/navbar";

import Home from "./coreComponents/home"; // FIXME: proper path
import { Resources } from "./coreComponents/resources";
import { Mutual } from "./coreComponents/mutual";
import { Contact } from "./coreComponents/contact";

import { ClientAuthenticationView } from "../common/accounts/base";

export function HomePageView() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export function ResourcesPageView() {
  return (
    <>
      <Navbar />
      <Resources />
    </>
  );
}

export function MutualPageView() {
  return (
    <>
      <Navbar />
      <Mutual />
    </>
  );
}

export function ContactPageView() {
  return (
    <>
      <Navbar />
      <Contact />
    </>
  );
}

export function ClientAuthView({ formType }) {
  return (
    <>
      <ClientAuthenticationView formType={formType} />
    </>
  );
}
