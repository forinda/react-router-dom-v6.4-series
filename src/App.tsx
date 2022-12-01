import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

/*
 <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      */
