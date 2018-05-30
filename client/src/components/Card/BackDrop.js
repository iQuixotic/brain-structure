import React from "react";
import './style-card.css'

// a backDrop for the brain
const BackDrop = ({children}) => {
    return(
    <div id="BackDropCrd" className="card-body my-card">
        {children}        
    </div>
    );
}

export default BackDrop;