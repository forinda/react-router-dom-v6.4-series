import { Link, NavLink, useLocation } from "react-router-dom";

import React from "react";

type Props = {
  children: JSX.Element;
};

const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Posts", path: "/dashboard/posts" },
  { name: "Settings", path: "/dashboard/settings" },
];

const DashLayout = ({ children }: Props) => {
  const location = useLocation().pathname;
  return (
    <div className="max-w-7xl mx-auto">
      {/* header */}
      <div className=" flex justify-between border-b px-10 py-2">
        <Link to={'/'}>Dev-orinda</Link>
        <div className="flex gap-4">
          <button>Logout</button>
          <button>Profile</button>
        </div>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <div className="p-4 border-r">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                to={link.path}
                key={link.name}
                className={({ isActive }) =>
                  isActive && location === link.path
                    ? "text-blue-600 underline"
                    : "text-gray-600 hover:text-blue-600 hover:underline"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
        {/* Elements */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashLayout;
