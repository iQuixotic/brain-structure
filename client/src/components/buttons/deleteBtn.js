import React from "react";
import "./style.css";


const DeleteBtn = props => (
  <span onClick={props.click} className="delete-btn" {...props}>
    X
  </span>
);

export default DeleteBtn;
