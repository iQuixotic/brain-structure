import React from "react";
import './Card.css'

// a backDrop for the brain
const Card = ({children, traits}) => {
    return(
    <div id={traits}  className="card-body my-card">
        {children}        
    </div>
    );
}

export default Card;