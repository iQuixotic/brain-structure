import React from "react";

export const Wrap = (props) => (
  <div id={props.id} className={props.cn}>
    {props.children}
  </div>
);

