import React, { Component } from "react";
import "./HomeComponent.css";
import Container from "react-bootstrap/Container";
import NavigationBar from "../../components/navbar/navbar";
import Hero from "../../containers/Hero/Hero";
import Description from "../../containers/Description/Description";
import Footer from "../../containers/Footer/Footer";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

class HomeComponent extends Component {
  render() {
    return (
      <Container id="hero_background" fluid>
        <NavigationBar />
        <Hero />
        <Description />
        <Footer />
        <SocialMedia />
      </Container>
    );
  }
}

export default HomeComponent;
