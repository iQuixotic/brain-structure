import React from "react";
import "./Div.css";

const Div = (props) => <div id="Div" className={props.cn}>{props.children}</div>;

export default Div;
