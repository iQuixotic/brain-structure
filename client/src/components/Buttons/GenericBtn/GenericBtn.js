import React from "react";

// foundation for ALL button components
const Btn = (props) => {
    return(
    <div>
        <button>{props.children}</button>
    </div>
    );
}
export default Btn;
