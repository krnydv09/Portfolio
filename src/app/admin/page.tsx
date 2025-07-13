"use client";
import React from "react";
import Messages from "../../pages/Messages";
import { GlobalsProvider } from "../GlobalsProvider";
import { NotificationProvider } from "../../components/Notification";

export default function AdminPage() {
  return (
    <GlobalsProvider>
      <NotificationProvider>
        <Messages />
      </NotificationProvider>
    </GlobalsProvider>
  );
} 