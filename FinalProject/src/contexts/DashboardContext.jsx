import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const storedAdmin = localStorage.getItem("admin");
  const [admin, setAdmin] = useState(storedAdmin || null);
  return (
    <DashboardContext.Provider value={{ admin, setAdmin }}>
      {children}
    </DashboardContext.Provider>
  );
};
