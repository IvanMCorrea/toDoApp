import React from "react";
import { Route, Routes } from "react-router-native";
import Home from "../pages/Home";
import Login from "../pages/Login";
import routes from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path={routes.login} element={<Login />} />
      <Route exact path={routes.home} element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
