import React from "react";
import './style.css';

const Card = (props) => {
    return(
    <div id="CardCrd">
        <div id={props.id}  className="card-body my-card">
           {props.children}        
        </div>
    </div>
    );
}

export default Card;