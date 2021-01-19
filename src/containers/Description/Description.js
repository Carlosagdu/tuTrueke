import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Illustration1 from './Illustration1'
import Illustration2 from './Illustration2';
import Illustration3 from './Illustration3';
import MainButton from '../../components/MainButton/MainButton'

class Description extends Component {
    firstCardInformation ={
        "header": "What is TuTrueke?",
        "paragraph": "Tutruekee is the perfect marketplace to exchange those items you might think someone else would like to have them" 
    }
    secondCardInformation={
        "header":"How does it work?",
        "firstItemText": "Publish your item",
        "secondItemText": "Meet people interested in exchange items"
    }
    joinUsInformation={
        "title": "Join us now !",
        "buttonText": "Connect"
    }
    render(){
        return(
            <div id="Description">
            {/* First row */}
                <Row className="justify-content-md-center align-items-center my-5">
                    <Col lg="auto">
                        <p className="h2 text-center my-0">{this.firstCardInformation.header}</p>
                        <p className="text-center my-2">{this.firstCardInformation.paragraph}</p>
                        <div className="d-flex justify-content-center">
                        <Illustration1/>
                        </div> 
                    </Col>
                </Row>
            {/* Second Row */}
                <Row id="How_it_works" className="justify-content-md-center align-items-center my-5">
                    <Col lg="auto">
                    <p className="h2 text-center my-3">{this.secondCardInformation.header}</p>         
                    </Col>
                </Row>
            {/* Third Row */}
                <Row className="justify-content-md-center align-items-center my-5">
                    <Col lg="auto" className="mx-lg-5">
                        <div className="d-flex justify-content-center">
                            <Illustration2 />
                        </div>
                        <p className="text-center my-2">{this.secondCardInformation.firstItemText}</p>
                    </Col>
                    <Col lg="auto" className="mx-lg-5">
                        <div className="d-flex justify-content-center">
                            <Illustration3 />
                        </div>
                        <p className="text-center my-2">{this.secondCardInformation.secondItemText}</p>
                    </Col>
                </Row>
            {/* Join us Row */}
                <Row className="justify-content-md-center align-items-center my-5">
                    <Col lg="auto">
                        <p className="h1 text-center">{this.joinUsInformation.title}</p>
                        <div className="d-flex justify-content-center">
                        <MainButton innerText={this.joinUsInformation.buttonText} href="/login" />
                        </div>
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default Description;