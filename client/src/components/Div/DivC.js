import React from "react";
import "./Div.css";

const DivC = (props) => <div id="CenterDiv" cn={props.className}>{props.children}</div>;

export default DivC;
