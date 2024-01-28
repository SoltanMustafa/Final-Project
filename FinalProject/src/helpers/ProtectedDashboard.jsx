import React, { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";
import Loading from "../Components/Loading/Loading";
import { Navigate } from "react-router-dom";

export default function ProtectedDashboard({ children }) {
  const { admin } = useContext(DashboardContext);
  console.log(admin);
  if (admin) return children;
  else if (admin === null) return <Navigate to={"/dashboard/admin"} />;
  else return <Loading />;
}
