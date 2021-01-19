import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'

class SocialMedia extends Component {
    render(){
        return(
            <div>
                <Row>
                    <Col lg="6" className="text-center">
                        <p className="font-weight-light">2021©️ TuTruekee. All Rights Reserved.</p>
                    </Col>
                    <Col lg="6">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="mx-1" />
                            <FontAwesomeIcon icon={faInstagramSquare} size="2x" className="mx-1"/>
                            <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-1"/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SocialMedia