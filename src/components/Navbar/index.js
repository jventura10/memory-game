import React from "react";
import "./style.css";

function Navbar(props) {
  return (

    <nav class="navbar navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="https://jventura10.github.io/portfolio/">Javier Ventura</a>
      <span class="navbar-text">Score: {props.count}</span>
    </nav>
  );
}

export default Navbar;