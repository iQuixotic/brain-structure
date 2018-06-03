
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

// whenever state changes, update state where the change occurs
regChangeHandler = event => {
    this.setState({[event.target.name]: [event.target.value]});
    console.log(this.state.email, this.state.nameF, this.state.nameL, this.state.nameU, this.state.pass, this.state.pwordCheck );
}

// sets each state to a variable to pass through object
// to backend/db
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

        {/* form is nested inside Card component. 
        Card is a dumb component */}
        <Card>
            <form>
                <h1 className= "title"> Register </h1>
    
                <Wrap cn="pad-top-form" />
                <Wrap cn="pad-top-form" />

                <Wrap cn="form-group">
                    <Row>
                        <Wrap cn="col-md-2 cent ">
                            <p className="text"> First Name </p>
                        </Wrap>
                        <Wrap cn="col-md-10">
                            {/* is bound to state nameF */}
                            <input name="nameF" value={this.state.nameF} onChange={this.regChangeHandler.bind(this)} className="form-control register-input" type="e-mail" placeholder="John" />
                        </Wrap>
                    </Row>
                </Wrap>

                <Wrap cn="pad-top-form" />

                <Wrap cn="form-group">
                    <Row>
                        <Wrap cn="col-md-2 cent ">
                            <p className="text"> Last Name </p>
                        </Wrap>
                        
                        <Wrap cn="col-md-10">
                            {/* is bound to state nameL */}
                            <input name="nameL" value={this.state.nameL} onChange={this.regChangeHandler.bind(this)} className="form-control register-input" placeholder="Nichols" />
                        </Wrap>
                    </Row>
                </Wrap>

                <Wrap cn="pad-top-form" />
   
                <Wrap cn="form-group">
                    <Row>
                        <Wrap cn="col-md-2 cent ">
                            <p className="text"> E-mail </p>
                        </Wrap>
                        <Wrap cn="col-md-10">
                            {/* input must be an email type and is bound to state 'email' */}
                            <input name="email" value={this.state.email} onChange={this.regChangeHandler.bind(this)} className="form-control register-input" type="e-mail" placeholder="john@wiredmail.com" />
                        </Wrap>
                    </Row>
                </Wrap>

                <Wrap cn="pad-top-form" />
                <Wrap cn="form-group">
                    <Row>
                        <Wrap cn="col-md-2 cent ">
                            <p className="text"> User Name </p>
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
                            <p className="text"> Password </p>
                        </Wrap>
                        <Wrap cn="col-md-10">
                            {/* must be a password and is bound to state at pass */}
                            <input name="pass" value={this.state.pass} onChange={this.regChangeHandler.bind(this)} className="form-control register-input" type="password"/>
                        </Wrap>
                    </Row>
                </Wrap>

                <Wrap cn="pad-top-form" />

                <Wrap cn="form-group">
                    <Row>
                        <Wrap cn="col-md-2 cent ">
                            <p className="text"> Confirm Password </p>
                        </Wrap>
                        <Wrap cn="col-md-10">
                            {/* must be a password type and is bound to state at pwordCheck */}
                            <input name="pwordCheck" value={this.state.pwordCheck} onChange={this.regChangeHandler.bind(this)} className="form-control register-input" type="password"/>
                        </Wrap>
                    </Row>
                </Wrap>

                <Wrap cn="pad-top-form" />

                {/* on button click, fires off regSubmitHandler */}
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