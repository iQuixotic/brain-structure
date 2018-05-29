import React from "react";

// because there are children, there must be a closing tag when used
export const Col = ({ size, children }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>
);
