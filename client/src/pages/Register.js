import React, {Component} from 'react';
import {Row, Container, Col, Wrap} from '../components/Grid/Z-index';
import {Navbar, Footer} from '../components/Nav/Z-index';
// import {Login} from '../components/Form/Z-index';
import {Register} from '../components/Form/Z-index';
import './Pages.css';


class RegisterPage extends Component {

  render() {
    return (
    <div className="RegisterPage">   
        <Navbar header="You are the greatest coder of all time !!!"/>
            <Container>                
                <Wrap cn="pad-vert cent">
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-10">                    
                            <Register />                     
                        </Col> 
                    </Row> 
                </Wrap>                   
            </Container>
        <Footer />
    </div>
    );
  }
}      
     
export default RegisterPage;
