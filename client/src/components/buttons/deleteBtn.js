import React from "react";
import "./style.css";


const DeleteBtn = props => (
  <span onClick={props.click} id={props.id} className="delete-btn" {...props}>
    X
  </span>
);

export default DeleteBtn;
