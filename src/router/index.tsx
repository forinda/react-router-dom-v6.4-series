import About from "../pages/About";
import Contact from "../pages/Contact";
import DashError from "../pages/DashError";
import DashStats from "../pages/DashStats";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Post from "../pages/Post";
import Posts from "../pages/Posts";
import Protected from "../components/Protected";
import React from "react";
import Settings from "../pages/Settings";
import { createBrowserRouter } from "react-router-dom";
import postLoader from "../loaders/postLoader";
import statsLoader from "../loaders/statsLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "Homepage",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    id: "About",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    id: "Contact",

    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    id: "Dashboard",
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
    children: [
      {
        errorElement: <DashError />,
        children: [
          {
            index: true,
            element: <DashStats />,
            loader: statsLoader,
          },
          {
            path: "/dashboard/posts",
            id: "Dashboardposts",
            element: <Posts />,
            loader: statsLoader,
          },
          {
            path: "/dashboard/settings",
            id: "DashboardSettings",
            element: <Settings />,
          },
          {
            path: "/dashboard/posts/:id",
            id: "Dashboard Post",
            element: <Post />,
            loader: postLoader,
          },
        ],
      },
    ],
  },
]);
