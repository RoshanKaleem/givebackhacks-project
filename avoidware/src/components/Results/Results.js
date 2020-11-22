import React from "react";
import "./Results.css";
import Result from "../Result/Result";
import { useHistory } from "react-router-dom";

function Results() {
  return (
    <div className="results">
      <h1> Results for: facebook.com </h1>
      <Result />
      <Result />
      <Result />
      <Result />
    </div>
  );
}

export default Results;
