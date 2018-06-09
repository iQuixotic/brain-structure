import React, {Component} from 'react';
import {Navbar, Footer} from '../components/nav/index';
import {CardSpace, InputCard, BackDrop, MyDecks} from '../components/cards/index';
import {Col, Row} from '../components/grid/index';
import {Card} from '../container/Card/index';
import {Carousel} from '../container/Carousel/index';
import './pages.css';
import API from '../utils/API';
import {fc} from '../assets/brainImages/index'

let startingBD = {img: fc}


class MainPage extends Component {

state = {
    backDropView: startingBD.img,
    iCard: {
        likes: 0,
        dislikes: 0,
        makingNote: false,
        content: "",
    },
    decks: {
        front: true,
        back: false
    },
    disorders: []
}

componentDidMount = () => {
    this.getAllDisorders();
}

// componentDidMount () {
    getAllDisorders = async () => {     
            // let disorders = []
        API.getDisData()
            console.log('res.json')
            // console.log(res.data)
            // await (res => disorders.push(res.json))
            await (res => this.setState({
                
               disorders: res.data
            })        
          )
          await console.log(this.state.disorders)
        //   .catch(err => console.log(err));
    };
// }

// regSubmitHandler = () => {   
//     let userName = this.state.nameU;
//     let firstName = this.state.nameF;
//     let lastName = this.state.nameL;
//     let email = this.state.email;
//     let password = this.state.pass;   
    
//     API.postRegData({
//         userName: userName,
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         password: password      
//     }).then(res =>
//         this.setState({nameU: "", nameL: "", nameF: "", email: "", pass: "", pwordCheck: "" })
//       )
//       .catch(err => console.log(err));
// };

changeViewHandler = using => {
    console.log('i made it here ')
    this.setState({
        backDropView: using
    })
}

// changeBackdropHandler = (whatToUse) => {

//     switch(whatToUse) {
//         case "pic":
//         this.setState({
//             backDropView: pic
//         })
//             break;
//         case "brain3d":
//         this.setState({
//             backDropView: brain3d
//         })
//             break;
//         case "disorder":
//         this.setState({
//             backDropView: disorder
//         })
//             break;
//         default: this.setState({
//             using: brain3d
//         })
//     }

// }

flipCardHandler = () => {
    console.log('Im gonna flip')
}

  render() {
    return (
        <div id="MainPage">

            <Navbar header="I Believe"/>
        
            <Row id="main-bd-row"> 
                <Col id="" size="md-2">
                    <Card id="button-card" >
                        {/* <Carousel /> */}
                    </Card>
                </Col>
                <Col size="md-8">
                {/* i think i need to update something here maybe, but maybe
                i can do it from the other component... */}
                    <BackDrop view={this.state.backDropView} id="bd"/>
                </Col>
                <Col size="md-2">
                    <Card id="long2">
                        <Carousel view={this.changeViewHandler.bind(this)} />
                    </Card>
                    <MyDecks crdId="MyDecksCard" />
                </Col>
            </Row>

            <Row id="index-card-row">
                <Col id="input-col" size="md-3">
                    <InputCard />
                </Col>
                <Col id="crd-col" size="md-6">
                    <CardSpace  />
                </Col>
                <Col size="md-3">
                    <Card id="length" />
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
              
        </div>
    );
    }
}      

export default MainPage;
