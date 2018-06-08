import React, { Component } from 'react';
import {Btn} from '../Buttons/Z-index';
import {Card} from '../../container/Card/index';
import {Plus} from '../Symbols/Z-index';
import {Row, Col, Wrap} from '../Grid/Z-index';
import './style.css';
import '../../index.css';

const CardSpace = (props) =>  {


        return(
        <div id={props.id} className={props.cn}>
            <Card id="note-card">
                <Col size="md-12" className="center">
                    <Row>
                        <Card id="note-card-content">
                            <Wrap cn="float-right green pad-right">
                            {/* Dynamic plus or minus signs to be printed depending validity ratio */}
                                <Row>                                                               
                                    <Plus size="2x"  />
                                    <Plus size="2x"  />                   
                                </Row>
                            </Wrap>
                            <Row>
                                {/* Content must be mapped over to know which card to display... a 
                                ternary operator will be used to decide whether to dispay the front or back */}
                                <Wrap cn="front">
                                    I have all of the content that anyone could ever want, right here !!!
                                </Wrap>
                            </Row>
                        </Card>
                    </Row>
                </Col>
                <Col size="md-12">
                    <Row id="btnR">
                        <Btn>Back</Btn>
                        <Btn>Next</Btn>                    
                    </Row>
                </Col>
            </Card>
        </div>
        );
    }

export default CardSpace;


// right here if I try to extend class card, it doesnt like that. there is 
// a lot here to look at !!!!!!!!!