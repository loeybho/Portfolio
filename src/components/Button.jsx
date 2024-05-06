import styled from "styled-components";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "#333"};
  color: white;
  padding: 10px 20px;
  border-radius: 7px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  type: ${(props) => props.type};

  &:hover {
    background-color: ${(props) => props.hoverColor || "#666"};
  }
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
