import React from "react";

export const Row = (props) => (
  <div id={props.traits} className='row'>
    {props.children}
  </div>
);




// export const Row = ({ fluid, children }) => (
//   <div className={`row${fluid ? "-fluid" : ""}`}>
//     {children}
//   </div>
// );