import React, {Component} from "react";
import {Img} from "../Img/Z-index";
import {Wrap} from "../Grid/Z-index";

import {fc, ls, fhl, fba} from '../../assets/brainImages/Z-index'




class Carousel extends Component {
// constructor(props){
//     super(props)
// }
state = {
        
}

pickClickHandler = () => {
    
}


    render(){
    return(
        <Wrap cn={props.cn}>
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
                role="button" data-slide="prev" onClick={props.next}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" 
                role="button" data-slide="next" onClick={props.back}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </Wrap>
        </Wrap>


        );
    }
}

export default Carousel;



