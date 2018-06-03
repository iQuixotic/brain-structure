
import React, {Component} from 'react';
import {Row, Container, Col, Wrap} from '../Grid/Z-index';
import {Card} from '../Card/Z-index';
import {Login} from './Log-in';
import API from '../../utils/API';
import '../../Uni.css';


class Register extends Component {
constructor(props){
    super(props)
}

state= {
    email: '',
    nameU: '',
    nameF: '',
    nameL: '',
    pass: '',
    pwordCheck: ''
}
regChangeHandler = event => {
    this.setState({[event.target.name]: [event.target.value]});
    console.log(this.state.email, this.state.nameF, this.state.nameL, this.state.nameU, this.state.pass, this.state.pwordCheck );
}

regSubmitHandler = () => {   
    let userName = this.state.nameU;
    let firstName = this.state.nameF;
    let lastName = this.state.nameL;
    let email = this.state.email;
    let password = this.state.pass;   
    
    API.postRegData({
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password      
    }).then(res =>
        this.setState({nameU: "", nameL: "", nameF: "", email: "", pass: "", pwordCheck: "" })
      )
      .catch(err => console.log(err));
};
  render() {
    return (
    <div className="Register">     

{/* <Card>
<form>
  <Wrap cn="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
  </Wrap>
  <Wrap cn="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
  </Wrap>



  <Wrap cn="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
  </Wrap>
  <Wrap cn="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
  </Wrap>
</form>
     

     <form>
  <Wrap cn="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </Wrap>
  <Wrap cn="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </Wrap>
  <Wrap cn="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label cn="form-check-label" for="exampleCheck1">Check me out</label>
  </Wrap>
  <button type="submit" className="btn my-btn">Submit</button>
</form>
</Card> */}
                 
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
                                            <button className="btn my-btn" onClick={this.regSubmitHandler}cn="btn">SUBMIT</button>
                                           
                                        </Wrap>      
                                    </Container>
                                </Card>
                            </Wrap> 
                         
                   
    </div>
    );
  }
}      
     
export default Register;