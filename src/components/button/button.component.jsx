import React from "react"
import PropTypes from "prop-types"

import { ButtonContainer } from "./button.styles";

const Button = ({ title }) => (
  <ButtonContainer>
    <button type="submit">{title}</button>
  </ButtonContainer>
)

Button.defaultProps = {
  title: `Click Me`,
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Button
