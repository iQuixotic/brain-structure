import React from "react";
import './style-card.css';

// a backDrop for the brain
const Card = (props) => {
    return(
    <div id="CardCrd">
        <div id={props.traits}  className="card-body my-card">
           {props.children}        
        </div>
    </div>
    );
}

export default Card;