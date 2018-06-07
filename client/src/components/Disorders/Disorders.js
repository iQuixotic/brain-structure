import React from "react";
import './style.css';

// will map over array and supply formated text
const Disorders = (props) => {
    return(
    <div id="Disorders">
        <div id={props.id}  className={props.cn}>

           <h1 id={props.disorder} className="dis-header">{props.title}</h1>
                <p className="p">{props.description}</p>

            <h3 className="dis-header">Brain Architecture</h3>
                <p className="p">{props.sructureData}</p>

            <h3 className="dis-header">Neurochemistry</h3>
                <p className="p">{props.chem}</p>

            <h3 className="dis-header">DSM-V</h3>
                <p className="p">{props.data}</p>

            <h3 className="dis-header">Studies</h3>
                <p className="p">{props.studies}</p>
        </div>
    </div>
    );
}

export default Disorders;

