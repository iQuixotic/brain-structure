import React from "react";
import './style-btn.css';

// a reuseable delete button
const Btn = (props) => {
    return(
    <div >
        <button id="Btn" className={props.cn}>{props.children}</button>
    </div>
    );
}

export default Btn;
