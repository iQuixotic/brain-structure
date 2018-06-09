import React from "react";
import {Jumbotron} from "../jumbotron/index";
import {Card} from '../../container/Card/index';
import {Img} from '../img';
import './style.css';

// a backDrop for the various dynamic content
const BackDrop = (props) => {
    return(
    <div id="BackDropCrd">
        <Card id={props.id} className="brain-card" >
            <Jumbotron style={props.background}  className={props.cnJumbo} id="brain-space" >
                <Img src={props.view} cn="whole-con"></Img>
            </Jumbotron>       
        </Card>
    </div>
    );
}

export default BackDrop;