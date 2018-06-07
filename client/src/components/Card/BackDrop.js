import React from "react";
import {Card} from "./Z-index";
import {Jumbotron} from "../Jumbotron/Z-index";
import './style.css';

// a backDrop for the various dynamic content
const BackDrop = (props) => {

    return(
    <div id="BackDropCrd">
        <Card id="brain-card">
            <Jumbotron style={props.background} id="brain-space" >
                {props.children} 
            </Jumbotron>       
        </Card>
    </div>
    );
}

export default BackDrop;