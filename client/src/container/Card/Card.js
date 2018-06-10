import React, {Component} from "react";
// import {Cards} from '../../pages/index';



class Card extends Component {
constructor(props) {
    super(props)
    this.state = {
        contentShowingBool: false
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
    <div id="CardCrd" onClick={this.props.click} onMouseOver={this.props.mo}>
        <div onClick={() => this.flipUpdateHandler(this.props.id)} id={this.props.id}  className="card-body my-card">
           {
            this.state.contentShowingBool ? <div>{this.props.front} </div> :
            <div> {this.props.back}  </div>  
           }
        </div>
    </div>
    );
}
}

export default Card;