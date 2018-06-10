import React, {Component} from "react";
import './style.css';


class Card extends Component {
constructor(props) {
    super(props)
    this.state = {
        contentShowingBool: true
    }
}  
flipUpdateHandler() {
    let contentShowingBool = this.state.contentShowingBool;
    this.setState({
        contentShowingBool: !contentShowingBool
    })
}

    render() {
    return(
    <div id="CardCrd" onClick={this.props.click} onMouseOver={this.props.mo} className="flipper">
        <div onClick={() => this.flipUpdateHandler(this.props.id)} id={this.props.id}  className="card-body my-card">
           {
            this.state.contentShowingBool ? 
            <div className={this.props.className} >{this.props.front} </div>:
            <div className={this.props.className}> {this.props.back}  </div>  
           }
           {this.props.children}
        </div>
    </div>
    );
}
}

export default Card;