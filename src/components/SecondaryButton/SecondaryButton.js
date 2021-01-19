import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SecondaryButton extends Component {
  render() {
    return (
      <Button href={this.props.hrefProp} variant="primary">
        {this.props.innerText}
        <FontAwesomeIcon className="ml-2" icon={this.props.icon} />
      </Button>
    );
  }
}

export default SecondaryButton;
