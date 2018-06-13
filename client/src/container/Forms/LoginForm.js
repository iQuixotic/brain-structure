import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Btn} from '../../components/buttons/index';
import {Container, Wrap} from '../../components/grid/index';
import {Card} from '../Card/index';
import './style.css';
import '../../index.css';


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

// whenever state changes, update state where the change occurs
loginChangeHandler = event => {
    this.setState({[event.target.name]: [event.target.value]});
    console.log(this.state.email, this.state.pass);
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
                        <input type="email" className="form-control"
                         id="exampleInputEmail1" aria-describedby="emailHelp" 
                         placeholder="Enter email" />

                        <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.</small>
                    </Wrap>
                    <Wrap cn="form-group">
                        <label className="text">Password</label>
                        <input type="password" className="form-control"
                         id="exampleInputPassword1" placeholder="Password" />
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
                                
                         
                                 
        </div>
    );
    }
}      

export default withRouter(Login);