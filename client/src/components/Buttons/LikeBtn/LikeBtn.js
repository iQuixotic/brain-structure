import React from "react";
import './LikeBtn.css'
import {Icon} from 'react-fa';

const LikeBtn = (props) => {
    return(
    <div>
         <Icon name="thumbs-up" size={props.size} className="thumbs-up" />
    </div>
    );
}

export default LikeBtn;



