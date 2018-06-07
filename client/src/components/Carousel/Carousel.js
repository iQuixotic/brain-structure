import React, {Component} from "react";
import {Img} from "../Img/Z-index";
import {Wrap} from "../Grid/Z-index";

import {fc, ls, fhl, fba} from '../../assets/brainImages/Z-index'

// will need this array to map over and 
// check what should display and where
let picArr = [{fc}, {ls}, {fhl}, {fba}] 

// must pass a ref through main page to update backdrop
const style1 = {
    backgroundImage: {fc},
    backgroundSize: "100% 100%"
}

const style2 = {
   backgroundColor: "rgb(94, 92, 92)"
}

class Carousel extends Component {
// constructor(props){
//     super(props)
// }
state = {
    picNumber: 0,
    showThisPic: 0,
    using: false
}


//should display picture in backdrop by passing reference
picClickHandler = () => {
    let temp = this.state.using;
    let picFrame = this.state.picNumber; 
    this.setState({
        using: !temp
        // i dont know if i can change 2 at once...
        // showThisPic: PicNumber
    })
    console.log(this.state.using)
    console.log(temp)
}

// should decrement the number being pointed to in the carousel array
backClickHandler = () => {
    !0 ?
    this.state.picNumber-- :
    this.setState({
        picNumber: picArr.length
    })
    console.log(picArr.length);
    console.log(this.state.picNumber);
}

// should increment the number being pointed to in the carousel array
nextClickHandler = () => {
    !picArr.length ?
    this.state.picNumber++ :
    this.setState({
        picNumber: 0
    })
    console.log(picArr.length);
    console.log(this.state.picNumber);
}
    render(){
    return(
        <Wrap cn={this.props.cn}>
            <Wrap id="carouselExampleControls" cn="carousel slide" data-ride="carousel">
                <Wrap cn="carousel-inner">
                    <Wrap cn="carousel-item active">
                        <Img cn="d-block w-100" 
                        src= {fc}
                         alt="First slide" />
                    </Wrap>
                    <Wrap cn="carousel-item">
                        <Img cn="d-block w-100" 
                        src={fba}
                         alt="Second slide" />
                    </Wrap>
                    <Wrap cn="carousel-item">
                        <Img cn="d-block w-100" 
                        src={ls}
                         alt="Third slide" />
                    </Wrap>
                </Wrap>
                <a className="carousel-control-prev" href="#carouselExampleControls" 
                role="button" data-slide="prev" onClick={this.props.next}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" 
                role="button" data-slide="next" onClick={this.props.back}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </Wrap>
        </Wrap>
        );
    }
}

export default Carousel;



