import React, {Component} from "react";
// import './style.css';
 
class Card extends Component {
// constructor(props){
//     super(props)
// }

state = {
    using: {
        pic: true,
        brain3d: false,
        disorder: false
    },
    // object to manage state on CardSpace
    // must talk with noteSpace
    iCard: {
        peerValidation: 0,
        note: "written",
        Content: "",
        Side: true,
        blank: false,
        revove: false
    }
}

    render() {
    return(
    <div id="CardCrd">
        <div id={this.props.id}  className="card-body my-card">
           {this.props.children}        
        </div>
    </div>
    );
}
}

export default Card;