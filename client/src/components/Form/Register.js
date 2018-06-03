
import React, {Component} from 'react';
import {Row, Wrap} from '../Grid/Z-index';
import {Card} from '../Card/Z-index';
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

<Card>
<form>
    
<Wrap cn="pad-top-form" />
<Wrap cn="pad-top-form" />

  <Wrap cn="form-group">
  <Row>
  <Wrap cn="col-md-2 cent ">
    First Name
    </Wrap>
    <Wrap cn="col-md-10">
    <input name="nameF" value={this.state.nameF} onChange={this.regChangeHandler.bind(this)} className="form-control register-input" type="e-mail" placeholder="John" />
        </Wrap>
        </Row>
  </Wrap>

  <Wrap cn="pad-top-form" />

  <Wrap cn="form-group">
  <Row>
  <Wrap cn="col-md-2 cent ">
    Last Name
    </Wrap>
    <Wrap cn="col-md-10">
    <input name="nameL" value={this.state.nameL} onChange={this.regChangeHandler.bind(this)} className="form-control register-input" placeholder="Nichols" />
    </Wrap>
        </Row>
  </Wrap>

  <Wrap cn="pad-top-form" />
   
  <Wrap cn="form-group">
  <Row>
  <Wrap cn="col-md-2 cent ">
    E-mail
    </Wrap>
    <Wrap cn="col-md-10">
    <input name="email" value={this.state.email} onChange={this.regChangeHandler.bind(this)} className="form-control register-input" type="e-mail" placeholder="john@wiredmail.com" />
    </Wrap>
        </Row>
  </Wrap>

<Wrap cn="pad-top-form" />

      <Wrap cn="form-group">
  <Row>
  <Wrap cn="col-md-2 cent ">
  User Name
    </Wrap>
    <Wrap cn="col-md-10">
   <input name="nameU" value={this.state.nameU} onChange={this.regChangeHandler.bind(this)} className=" form-control register-input" placeholder="Johnyy777" />
   </Wrap>
        </Row>
  </Wrap>

  <Wrap cn="pad-top-form" />

    <Wrap cn="form-group">
  <Row>
  <Wrap cn="col-md-2 cent ">
  Password
    </Wrap>
    <Wrap cn="col-md-10">
    <input name="pass" value={this.state.pass} onChange={this.regChangeHandler.bind(this)} className="form-control register-input" type="password"/>
    </Wrap>
        </Row>
  </Wrap>

<Wrap cn="pad-top-form" />

 <Wrap cn="form-group">
  <Row>
  <Wrap cn="col-md-2 cent ">
  Confirm Password
    </Wrap>
    <Wrap cn="col-md-10">
    <input name="pwordCheck" value={this.state.pwordCheck} onChange={this.regChangeHandler.bind(this)} className="form-control register-input" type="password"/>
    </Wrap>
        </Row>
  </Wrap>

  <Wrap cn="pad-top-form" />

  <button className="btn my-btn" onClick={this.regSubmitHandler}cn="btn">SUBMIT</button>
</form>
</Card> 
                 
                             {/* <Wrap cn="text-center">
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
                          */}
                   
    </div>
    );
  }
}      
     
export default Register;