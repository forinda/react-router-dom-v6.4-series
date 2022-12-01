import DashLayout from "../components/DashLayout";
import { Outlet } from "react-router-dom";
import React from "react";

const Dashboard = () => {
  return (
    <DashLayout>
      <Outlet/>
    </DashLayout>
  );
};

export default Dashboard;
