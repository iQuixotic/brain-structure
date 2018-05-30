import React from "react";
import './style-btn.css';
import {Icon} from 'react-fa';

const LikeBtn = (props) => {
    return(
    <div id="LikeBtn">
         <Icon name="thumbs-up" size={props.size} className="thumbs-up" />
    </div>
    );
}

export default LikeBtn;



