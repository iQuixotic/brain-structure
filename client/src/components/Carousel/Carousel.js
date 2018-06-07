import React, {Component} from "react";
import {Img} from "../Img/Z-index";
import {Wrap} from "../Grid/Z-index";

import {fc, ls, fhl, fba} from '../../assets/brainImages/Z-index'

// will need this array to map over and 
// check what should display and where
let picArr = [{img: fc}, {img: ls}, {img: fhl}, {img: fba}];

class Carousel extends Component {
// constructor(props){
//     super(props)
// }
state = {
    picNumber: 1,
    showThisPic: picArr[0],
    using: false
}

//should display picture in backdrop by passing reference
updateBackDrop = () => {
    let temp = this.state.using;
    // let picFrame = this.state.picNumber; 
    this.setState({
        using: !temp
        // i dont know if i can change 2 at once...
        // showThisPic: PicNumber
    })
    console.log(this.state.using)
    console.log(temp)
}

// should decrement the number being pointed to in the carousel array
prevClickHandler = () => {

      // holder variables
      let stateHolder = this.state.picNumber;
      stateHolder--;
  
      this.state.picNumber >
      0 ?
      this.changeSlideHandler(stateHolder) :   
      this.addLengthHandler()
}

addLengthHandler = () => {
    this.setState({
        picNumber: picArr.length-1,
        showThisPic: picArr[this.state.picNumber]
    })
    console.log(picArr.length);
    console.log(this.state.picNumber);
    console.log(this.state.showThisPic.img);
}

// should increment the number being pointed to in the carousel array
nextClickHandler = () => {

    // holder variables
    let stateHolder = this.state.picNumber;
    stateHolder++;

    this.state.picNumber <
    picArr.length-1 ?
    this.changeSlideHandler(stateHolder) :
    this.startOverHandler();
}

// increment/decrement carousel by 1 pic if
// number is not 0 or length of pic array
changeSlideHandler = (stateHolder) => {
    this.setState({
        picNumber: stateHolder,
        showThisPic: picArr[this.state.picNumber]
    })  
    console.log(picArr.length);
    console.log(this.state.picNumber);
    console.log(this.state.showThisPic.img);
}

// start the count over at 0
startOverHandler = () => {
    this.setState({
        picNumber: 0,
        showThisPic: picArr[this.state.picNumber]
    })
    console.log(picArr.length);
    console.log(this.state.picNumber);
    console.log(this.state.showThisPic.img);
}

    render(){
    return(
        <Wrap cn={this.props.cn}>
            <Wrap id="carouselExampleControls" cn="carousel slide" data-ride="carousel">
                <Wrap cn="carousel-inner">
                    <Wrap cn="carousel-item active">
                        <Img cn="d-block w-100" 
                         click={this.updateBackDrop}
                         src= {this.state.showThisPic.img}
                         alt="First slide" />
                    </Wrap>
                </Wrap>
                <a className="carousel-control-prev" onClick={this.prevClickHandler}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" onClick={this.nextClickHandler}>
                    <span className="carousel-control-next-icon"></span>
                </a>
            </Wrap>
        </Wrap>
        );
    }
}

export default Carousel;



