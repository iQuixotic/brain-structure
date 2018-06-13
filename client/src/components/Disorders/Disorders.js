import React from "react";
import './style.css';

// will map over array and supply formated text
const Disorders = (props) => {
    return(
    <div id="Disorders">
        <div id={props.id}  className={props.cn}>

           <h1 id={props.disorder} className={props.cnHeaders}>{props.title}</h1>
                <p className="p">{props.description}</p>

            <h3 className={props.cnHeaders}>{props.h31}</h3>
                <p className="p">{props.structureData}</p>

            <h3 className={props.cnHeaders}>{props.h32}</h3>
                <p className="p">{props.chem}</p>

            <h3 className={props.cnHeaders}>{props.h33}</h3>
                <p className="p">{props.studies}</p>
        </div>
    </div>
    );
}

export default Disorders;

