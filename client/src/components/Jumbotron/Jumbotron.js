import React from "react";

const Jumbotron = (props) => (
  <div id={props.id}
    className="jumbotron">{props.children}
  </div>
);

export default Jumbotron;
