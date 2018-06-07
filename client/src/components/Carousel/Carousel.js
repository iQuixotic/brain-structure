import React from "react";
import {Img} from "../Img/Z-index";
import {Wrap} from "../Grid/Z-index";

import {fc} from '../../assets/brainImages/Z-index'


const Carousel = (props) => {
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
                        src="../../assets/brainImages/functions-by-area.jpg"
                         alt="Second slide" />
                    </Wrap>
                    <Wrap cn="carousel-item">
                        <Img cn="d-block w-100" 
                        src="../../assets/brainImages/function-control.jpg"
                         alt="Third slide" />
                    </Wrap>
                </Wrap>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </Wrap>
      </Wrap>


    );
}

export default Carousel;



