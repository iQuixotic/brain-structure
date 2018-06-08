import React from "react";
import {Icon} from 'react-fa';
import './style.css';


const LikeBtn = (props) => {
    return(
    <div id="LikeBtn">
         <Icon name="thumbs-up" onClick={props.click} size={props.size} className="thumbs-up" />
    </div>
    );
}

export default LikeBtn;



