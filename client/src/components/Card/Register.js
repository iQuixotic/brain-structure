
import React, { Component } from 'react';
import { Row, Container, Col, Wrap } from '../Grid/Z-index';
import { Btn } from '../Buttons/Z-index';
import { Card } from '../Card/Z-index';
import { Login } from '../Card/Z-index';
import API from '../../utils/API';
import '../../Global.css';


class Register extends Component {
constructor(props){
    super(props)
}

state= {
    email: '',
    userN: '',
    nameF: '',
    nameL: '',
    pass: '',
    pwordCheck: ''
}
regChangeHandler = event => {
    this.setState({[event.target.name]: [event.target.value]});
    console.log(this.state.email, this.state.nameF, this.state.nameL, this.state.nameU, this.state.pass, this.state.pwordCheck );
}

regSubmitHandler = (data) => {   
    data = {
        email: this.state.email,
        userN: this.state.userN,
        nameL: this.state.nameF,
        nameF: this.state.nameF,
        password: this.state.pass
    }     
    API.postRegData(data)
};
  render() {
    return (
    <div className="Register">     

     
                      <Container>
                            <Wrap cn="text-center">
                                <Card> 
                                    <Container>
                                        <Wrap cn="register-form justify-content-center">Register
                                            <Row> 
                                                <Col size="md-6"> E-mail: </Col> <Col size="md-6"> User Name: </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-6"><input name="email" value={this.state.email} onChange={this.regChangeHandler.bind(this)} className="register-input" type="e-mail" placeholder="john@wiredmail.com" /></Col>
                                                <Col size="md-6"><input name="nameU" value={this.state.nameU} onChange={this.regChangeHandler.bind(this)} className="register-input" placeholder="toommy" /></Col>
                                            </Row>       
                                                 
                                            <Row> 
                                                <Col size="md-6"> First Name: </Col> <Col size="md-6"> Last Name: </Col>
                                            </Row>
                                            <Row>
                                                <Col size="md-6"><input name="nameF" value={this.state.nameF} onChange={this.regChangeHandler.bind(this)} className="register-input" type="e-mail" placeholder="Fred" /></Col>
                                                <Col size="md-6"><input name="nameL" value={this.state.nameL} onChange={this.regChangeHandler.bind(this)} className="register-input" placeholder="toommy" /></Col>
                                            </Row>    
                                            <Row>Password: <input name="pass" value={this.state.pass} onChange={this.regChangeHandler.bind(this)} type="password"/></Row>
                                            <Row>Verify Password:<input name="pwordCheck" value={this.state.pwordCheck} onChange={this.regChangeHandler.bind(this)} type="password"/></Row>
                                            <button className="btn my-btn" onClick={this.regSubmitHandler.bind(this)}cn="btn">SUBMIT</button>
                                           
                                        </Wrap>      
                                    </Container>
                                </Card>
                            </Wrap>
                         </Container> 
                   
    </div>
    );
  }
}      
     
export default Register;