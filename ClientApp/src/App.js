import React, { Component } from "react";
import Layout from "./components/Layout";
import Employee from "./components/Employees";

import NavMenu from "./components/NavMenu";

const App = () => {
  return (
    <div>
      <Layout>
        <NavMenu>
          <Employee />
        </NavMenu>
      </Layout>
    </div>
  );
};

export default App;
