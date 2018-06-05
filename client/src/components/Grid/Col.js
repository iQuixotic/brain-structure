import React from "react";

// because there are children, there must be a closing tag when used
export const Col = (props) => (
  <div id={props.id} className={props.size.split(" ").map(size => "col-" + size).join(" ")}>
    {props.children}
  </div>
);
