import React from "react";
import './style-btn.css';

// foundation for ALL button components
const Btn = (props) => {
    return(
    <div id="GenericBtn">
        <button>{props.children}</button>
    </div>
    );
}
export default Btn;
