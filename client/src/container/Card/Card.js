import React, {Component} from "react";

// let pic = {test: "test"}
// let brain3d = {test: "test"}
// let disorder = {test: "test"}

class Card extends Component {


// <div onMouseOver={() => this.setState({ bool: true })} onMouseOut={() => this.setState({ bool: false })}>
//   {
//     this.state.bool ? (
//       <span>[OPTION1] show after onMouseEnter</span>
//     ) : (
//       <div>[OPTION2] show after onMouseLeave</div>
//     )
//   }
// </div>



    render() {
    return(
    <div id="CardCrd" onClick={this.props.clicked} onMouseOver={this.props.mo}>
        <div id={this.props.id}  className="card-body my-card">
           {this.props.children}        
        </div>
    </div>
    );
}
}

export default Card;