import React from "react";

// reusable Img 
const Img = (props) => {
    return(
            <img id={props.id} className={props.cn} 
            onClick={props.click} href={props.href} />
    );
}

export default Img;