import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Information from "../../components/Information/Information";
import GirlSvg from "./GirlSvg";

class Hero extends Component {
  render() {
    return (
      <Row className="justify-content-md-center align-items-center">
        <Col lg="4">
          <Information />
        </Col>
        <Col lg="auto">
          <GirlSvg />
        </Col>
      </Row>
    );
  }
}

export default Hero;
