import React from "react";

// I can use these chunks with buttons and cards to build out forms later
const TextArea = props => (
  <div className="form-group">
    <textarea className="form-control" rows="20" {...props} />
  </div>
);

export default TextArea;