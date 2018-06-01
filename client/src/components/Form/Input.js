import React from "react";

// I can use these chunks with buttons and cards to build out forms later
const Input = props => (
  <div className="form-group">
    <input className={props.cn} {...props} />
  </div>
);

export default Input; 