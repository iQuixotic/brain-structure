import React from "react";
import Btn from '../GenericBtn/GenericBtn';
import './DeleteBtn.css'

// a reuseable delete button
const DelBtn = (props) => {
    return(
    <div>
        <button className="btn btn-del">{props.children}</button>
    </div>
    );
}

export default DelBtn;
