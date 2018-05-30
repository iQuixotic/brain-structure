import React from "react";
import './style-btn.css'

// a reuseable delete button
const DelBtn = (props) => {
    return(
    <div id="DeleteBtn">
        <button className="btn btn-del">{props.children}</button>
    </div>
    );
}

export default DelBtn;
