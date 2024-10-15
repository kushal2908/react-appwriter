import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Auth from "./pages/Auth";
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";
import { APP_URL } from "./utils/app_urls";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" errorElement={<p>Not found</p>}>
        <Route index path={APP_URL.INDEX} element={<Auth />} />
        <Route element={<Layout />}>
          <Route path={APP_URL.DASHBOARD} element={<Dashboard />} />
        </Route>
      </Route>
    </>
  )
);
