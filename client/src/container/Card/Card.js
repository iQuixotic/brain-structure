import React, {Component} from "react";
import './style.css';
 
class Card extends Component {
// constructor(props){
//     super(props)
// }

state = {

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