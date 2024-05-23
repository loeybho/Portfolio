import styled from "styled-components";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

const StyledButton = styled.button`
  color: white;
  padding: 10px 20px;
  border-radius: 100px;
  border: solid 2px white;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  type: ${(props) => props.type};

  &:hover {
    background-color: ${(props) => props.hovercolor || "#666"};
  }
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
