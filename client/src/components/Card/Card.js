import React from "react";
import './style-card.css';

// a backDrop for the brain
const Card = ({children, traits}) => {
    return(
    <div id="CardCrd">
        <div id={traits}  className="card-body my-card">
           {children}        
        </div>
    </div>
    );
}

export default Card;