import React from "react";
import './style-btn.css';

// foundation for ALL button components
const Btn = (props) => {
    return(
    <div id="Btn">
        <button className={props.cn}>{props.children}</button>
    </div>
    );
}

export default Btn;
