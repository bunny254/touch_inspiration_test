import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import App from "../App";
import Person from "./Person";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} exact />
      <Route path="/users:id " element={<Person/>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
