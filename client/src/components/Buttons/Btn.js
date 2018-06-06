import React from "react";
import './style.css';
import '../../Uni.css';
 
const Btn = (props) => {
    return( 
         <button onClick={props.click} className="btn my-btn" {...props}>{props.children}</button> 
    );
}

export default Btn;

