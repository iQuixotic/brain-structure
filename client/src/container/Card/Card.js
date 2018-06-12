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
    <div className='target' onClick={this.props.click} onMouseOver={this.props.mo}>
        <div  id={this.props.id}  className="card-body my-card">
           {
            this.state.contentShowingBool ? 
            <div onClick={() => this.flipUpdateHandler(this.props.id)} 
            className={this.props.conClass} data-id={this.props.data_id} >{this.props.front} </div> :

            <div onClick={() => this.flipUpdateHandler(this.props.id)} 
            className={this.props.conClass}> {this.props.back}  </div>  
           }
           {this.props.children}
        </div>
    </div>
    );
}
}

export default Card;