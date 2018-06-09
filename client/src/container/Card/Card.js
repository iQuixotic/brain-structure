import React, {Component} from "react";

let pic = {test: "test"}
let brain3d = {test: "test"}
let disorder = {test: "test"}

class Card extends Component {
// constructor(props){
//     super(props)
// }

// state = {
//     using: pic,
//     iCard: {
//         likes: 0,
//         dislikes: 0,
//         makingNote: false,
//         content: "",
//     },
//     decks: {
//         front: true,
//         back: false
//     }
// }

// <div onMouseOver={() => this.setState({ bool: true })} onMouseOut={() => this.setState({ bool: false })}>
//   {
//     this.state.bool ? (
//       <span>[OPTION1] show after onMouseEnter</span>
//     ) : (
//       <div>[OPTION2] show after onMouseLeave</div>
//     )
//   }
// </div>

changeBackdropHandler = (whatToUse) => {

    switch(whatToUse) {
        case "pic":
        this.setState({
            using: pic
        })
            break;
        case "brain3d":
        this.setState({
            using: brain3d
        })
            break;
        case "disorder":
        this.setState({
            using: disorder
        })
            break;
        default: this.setState({
            using: brain3d
        })
    }

}

flipCardHandler = () => {
    console.log('Im gonna flip')
}

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