import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import cover from "../images/Rectangle 1.png";

const Main = () => {
  return (
    <div>
      <img className="img-fluid position-fixed opacity-50" src={cover} />
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
