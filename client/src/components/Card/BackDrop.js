import React from "react";
import {Card} from "./Z-index";
import {Jumbotron} from "../Jumbotron/Z-index";
import './style.css';

// a backDrop for the brain
const BackDrop = (props) => {
    return(
    <div id="BackDropCrd">
        <Card>
            <Jumbotron>
                {props.children} 
            </Jumbotron>       
        </Card>
    </div>
    );
}

export default BackDrop;