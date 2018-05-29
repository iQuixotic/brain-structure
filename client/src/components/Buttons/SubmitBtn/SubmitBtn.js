import React from "react";
import './SubmitBtn.css'

// a reuseable delete button
const SubmitBtn = (props) => {
    return(
    <div>
        <button className="btn btn-dk">{props.children}</button>
    </div>
    );
}

export default SubmitBtn;
