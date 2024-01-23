import React from "react";
import MainRouter from "./router";
import { DashboardProvider } from "./contexts/DashboardContext";

export default function CounterApp() {
  return (
    <>
      <DashboardProvider>
        <MainRouter />
      </DashboardProvider>
    </>
  );
}
