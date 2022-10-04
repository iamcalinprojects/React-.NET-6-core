import React from "react";
import { Container } from "reactstrap";
import NavMenu from "./NavMenu";
import Home from "./Home";
import Employees from "./Employees";
import { Route, Router, Routes } from "react-router-dom";

export default function Layout(props) {
  return (
    <div>
      <NavMenu />

      {/* <div>{props.children}</div> */}
    </div>
  );
}
