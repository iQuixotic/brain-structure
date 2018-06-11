import React, {Component} from 'react';
import {Navbar, Footer} from '../components/nav/index';
import {CardSpace, InputCard, BackDrop, MyDecks} from '../components/cards/index';
import {Btn} from '../components/buttons/index';
import {Disorders} from '../components/disorders/index';
import {Col, Row, Wrap} from '../components/grid/index';
import {Card} from '../container/Card/index';
import {Carousel} from '../container/Carousel/index';
import './pages.css';
import API from '../utils/API';
import {fc} from '../assets/brainImages/index';
import {brain3d} from '../assets/3d/index';

let startingBD = {img: fc}
let brainView = {img: brain3d}

let i = 0;
let contentHolder = [];
class MainPage extends Component {

state = {
    backDropView: brainView.img,
    iCard: {
        i:0,
        likes: 0,
        dislikes: 0,
        makingNote: false,
        content: [],
    },
    disorders: [],
    disorderUsing: 'Schizophrenia'
}

componentDidUpdate = () => {
 
}

componentWillMount = () => {
    this.getAllPublicCards();
    this.getAllDisorders();
  }
  
  getAllPublicCards = () => {     
    API.getAllPublicCards()
        .then(res => { 
        this.setState({
            content: res.data                
        })      
        contentHolder.push(res.data)
        console.log(contentHolder)
        })          
  };


getAllDisorders = () => {     
    API.getDisData()
        .then(res => { console.log('res.json')
        this.setState({
            disorders: res.data                
        })      
        console.log(res.data) 
        })          
        console.log(this.state.disorders)
        
};

// getOneDisorder = (disorderUsing) => {
//     API.getThisDisData()
//         .then(res => {
//             console.log('get this disorder booooyyyy')
//             this.setState({
//                 disorderUsing: res.data
//             })
//             console.log(res.data)
//         })
//         console.log(this.state.disorders)
// }


changeViewHandler = using => {
    console.log('i made it here ')
    this.setState({
        backDropView: using
    })
}


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
                        {/* <BackDrop view={brainView.img} /> */}
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
                <Card id="note-card">
                <Col size="md-12" className="center">
                    <Row>



                        <Card id="note-card-content">
                            <Wrap cn="float-right green pad-right">
                            {/* Dynamic plus or minus signs to be printed depending validity ratio */}
                                <Row>                                                               
                                    {/* <Plus size="2x"  />
                                    <Plus size="2x"  />                    */}
                                </Row>
                            </Wrap>
                            <Row>
                                {/* Content must be mapped over to know which card to display... a 
                                ternary operator will be used to decide whether to dispay the front or back */}
                                <Card
                                 front = {contentHolder[i].content.front}
                                //  back = {this.state.content[0].content.back}
                                >
                               
                                  
                                </Card>
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



                </Col>
                <Col size="md-3">
                    <Card id="length">
                    {this.state.disorders.map(disorder => (
                        // <Disorders 
                        // title={disorder.name}
                        // />

                        <Disorders 
                        title={disorder.name}
                        description={disorder.summary}
                        h31='Brain Architecture'
                        structureData={disorder.brainArchitecture}
                        h32='NeuroChemistry'
                        chem={disorder.neuroChem}
                        h33='Famous Studies'
                        studies={disorder.studies}
                        
                        />
                                )
                            )
                        };
                    </Card>
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
