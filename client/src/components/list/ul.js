import React from "react";

const Ul = (children) => {
  return (
    <div>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};

export default Ul;