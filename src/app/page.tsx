"use client";
import React from "react";
import Home from "../pages/Home";
import { GlobalsProvider } from "./GlobalsProvider";
import { NotificationProvider } from "../components/Notification";

export default function Page() {
  return (
    <GlobalsProvider>
      <NotificationProvider>
        <Home />
      </NotificationProvider>
    </GlobalsProvider>
  );
}
