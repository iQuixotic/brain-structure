
// THIS IS HOME TO THE GREAT AND POWERFUL VIRTUAL DOM !!!!!
import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

