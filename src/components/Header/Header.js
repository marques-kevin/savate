import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { Container, Title, Back } from "./Header.style";

export default class Header extends PureComponent {
  render() {
    return (
      <Container>
        {this.props.back && (
          <Back>
            <ArrowBack />
          </Back>
        )}
        <Title>{this.props.title}</Title>
      </Container>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};
