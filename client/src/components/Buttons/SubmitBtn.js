import React from "react";
import './style-btn.css';

// a reuseable delete button
const SubmitBtn = (props) => {
    return(
    <div id="SubmitBtn">
        <button className="btn btn-dk">{props.children}</button>
    </div>
    );
}

export default SubmitBtn;
