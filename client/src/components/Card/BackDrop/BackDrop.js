import React from "react";
import './BackDrop.css'

// a backDrop for the brain
const BackDrop = ({children}) => {
    return(
    <div className="card-body my-card">
        {children}        
    </div>
    );
}

export default BackDrop;