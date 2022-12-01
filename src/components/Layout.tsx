import { Link } from "react-router-dom";
import React from "react";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      {" "}
      <nav className="flex justify-center gap-4 border-b py-4 shadow">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
