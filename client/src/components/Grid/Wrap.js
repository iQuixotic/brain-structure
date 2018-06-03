import React from "react";

export const Wrap = (props) => (
  <div id={props.traits} className={props.cn}>
    {props.children}
  </div>
);

