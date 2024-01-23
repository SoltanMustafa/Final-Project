import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  return (
    <DashboardContext.Provider value={{ admin, setAdmin }}>
      {children}
    </DashboardContext.Provider>
  );
};