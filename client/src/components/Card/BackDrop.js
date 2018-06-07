import React from "react";
import {Card} from "./Z-index";
import {Jumbotron} from "../Jumbotron/Z-index";
import './style.css';

// a backDrop for the various dynamic content
const BackDrop = (props) => {
    return(
    <div id="BackDropCrd">
        <Card id={props.id} className="brain-card" >
            <Jumbotron style={props.background}  className={props.cnJumbo} id="brain-space" >
                {props.children} 
            </Jumbotron>       
        </Card>
    </div>
    );
}

export default BackDrop;