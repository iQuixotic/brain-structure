import React, {Component} from "react";
import './style.css';


class Card extends Component {
constructor(props) {
    super(props)
    this.state = {
        contentShowingBool: true,
        isCheckedBool: false
    }
}  
flipUpdateHandler() {
    let contentShowingBool = this.state.contentShowingBool;
    this.setState({
        contentShowingBool: !contentShowingBool
    })
}

isChecked() {
    console.log('nonono')
//     let isCheckedBool = this.state.isCheckedBool;
//     this.setState({
//         isCheckedBool: !isCheckedBool
//     })
//   this.state.isCheckedBool ? 
//   console.log('Its checked so hard right now'):
//   console.log('its not checked')
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