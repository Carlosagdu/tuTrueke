import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class MainButton extends Component {
  render() {
    return (
      <Button
        href={this.props.href}
        variant="warning"
        className="mt-3 px-lg-4 shadow"
      >
        {this.props.innerText}
      </Button>
    );
  }
}

export default MainButton;
