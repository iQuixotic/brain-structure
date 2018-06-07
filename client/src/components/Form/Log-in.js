import React, {Component} from 'react';
import {Btn} from '../Buttons/Z-index';
import {Container, Wrap} from '../Grid/Z-index';
import {Card} from '../Card/Z-index';
import './style.css';
import '../../index.css';
import {withRouter} from 'react-router-dom';

// login component is stateful
// and contains 2 input fields
class Login extends Component {
constructor() {
    super();
    this.toRegPathHandler = this.toRegPathHandler.bind(this);
}

// navigate to the Register page
toRegPathHandler(e) {
    e.preventDefault();
    this.props.history.push('/register');
}

  render() {
    return (
        <div id="Login">        

    <Container>
        <Container>
            <Card>
                <form>

                <h1 className="title"> Login </h1>

                    <Wrap cn="form-group">
                        <label className="text">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </Wrap>
                    <Wrap cn="form-group">
                        <label className="text">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </Wrap>
                    <Wrap cn="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label text" >Forgot My Password</label>
                    </Wrap>
                    <Wrap cn="form-group">
                        <Btn type="submit">SUBMIT</Btn>
                        <Btn type="submit" click={this.toRegPathHandler} className="btn my-btn">REGISTER</Btn>
                    </Wrap>
                </form>
            </Card>
        </Container>
    </Container>
                            {/* <Container>
                                <Card id="login-card"> 
                             
                                
                                    
                                        
                                        <Wrap cn="cent"> 
                                      
                                           
                                                
                                            <Row>   
                                            <Col size="md-1" />                                         
                                                 Username: 
                                                <input className="spacing width-input " type="name" placeholder="tony637"/>
                                             </Row>
                                            <Row> <Col size="md-1" />
                                                Password:
                                                <input className="spacing width-input " type="password" placeholder="......"/>
                                            </Row>
                                            <Row>
                                                <Wrap >
                                                    <button className="space spacing-top width-control my-btn btn">Log-in</button>  
                                                    <button className="space spacing-top width-control my-btn btn">I Don't have a Log-in </button>                                              
                                                </Wrap>
                                            </Row>
                                        </Wrap> 
                                      
                                   </Card>
                                </Container> */}
                                
                         
                                 
        </div>
    );
    }
}      

export default withRouter(Login);