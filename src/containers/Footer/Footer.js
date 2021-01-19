import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../../assets/images/Logo.svg'

class Footer extends Component{
    render(){
        return(
            <footer className="bg-primary bg-gradient rounded-3 text-center text-lg-start">
                <Row>
                    <Col lg="4" md="12" sm="12">
                    <img
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Tu trueke logo"
                        />
                    <strong className="align-middle">TuTrueke</strong>
                    </Col>
                    <Col lg="4" md="12" sm="12">
                        <p className="h5">Create a free account</p>
                        <ul className="list-unstyled mb-0">
                        <li>
                            <a href="#!" className="text-dark">Sign in</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">About</a>
                        </li>
                        </ul>
                    </Col>
                    <Col lg="4" md="12" sm="12">
                        <p className="h5">Support</p>
                        <ul className="list-unstyled mb-0">
                        <li>
                            <a href="#!" className="text-dark">Contact Us</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#!" className="text-dark">Privacy Policy</a>
                        </li>
                        </ul>
                    </Col>
                </Row>
            </footer>
        )
    }
}

export default Footer;