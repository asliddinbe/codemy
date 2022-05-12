import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import React from "react";
import App from "../containers/App";

export default () => {
  return (
    <>
      <Router>
        <App />
      </Router>
    </>
  );
};
