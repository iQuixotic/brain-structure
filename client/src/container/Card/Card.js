import React, {Component} from "react";

let pic = {test: "test"}
let brain3d = {test: "test"}
let disorder = {test: "test"}

class Card extends Component {
// constructor(props){
//     super(props)
// }

state = {
    // determines what is displaying in the 
    // backdrop's background
    using: pic,
    // object to manage state on CardSpace
    // must talk with noteSpace
    iCard: {
        likes: 0,
        dislikes: 0,
        makingNote: false,
        content: "",
        // back: "",        // think i just need an array, might not need 
    },
    // watches decks and communicates
    // with iCard
    decks: {
        front: true,
        back: false
    }
}

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