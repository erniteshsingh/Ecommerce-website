import React from "react";
import Navbar from "./Components/Navbar";
import AppRouter from "./Router/AppRouter";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="pt-20 px-6">
        <AppRouter />
      </div>
    </Fragment>
  );
};

export default App;
