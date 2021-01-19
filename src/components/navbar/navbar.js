import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/Logo.svg";
import "./navbar.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class navbar extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Tu trueke logo"
            />
            <strong id="brand_text">TuTrueke</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                href="#Description"
                className="text-dark hvr-sweep-to-right"
              >
                Explore
              </Nav.Link>
              <Nav.Link
                href="#How_it_works"
                className="text-dark hvr-sweep-to-right"
              >
                How it works
              </Nav.Link>
            </Nav>
            <SecondaryButton
              hrefProp="/login"
              innerText="Login"
              icon={faUser}
            />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default navbar;
