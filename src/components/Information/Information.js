import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import MainButton from "../MainButton/MainButton";

class Information extends Component {
  render() {
    return (
      <Container>
        <div>
          <div>
            <p className="mb-lg-0">Welcome to TuTrueke</p>
          </div>
          <div>
            <p className="h1 my-lg-3">Barter Platform</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <MainButton innerText="Explore" href="#Description" />
          </div>
        </div>
      </Container>
    );
  }
}

export default Information;
