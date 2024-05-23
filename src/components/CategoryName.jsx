import styled from "styled-components";
import PropTypes from "prop-types";

CategoryName.propTypes = {
  children: PropTypes.string.isRequired,
};

const Wrapper = styled.button`
  margin: 20px 0;
  font-family: "ghanachoco";
  font-size: 4rem;
  position: relative;
  .cate-point {
    color: #f5cc17;
    font-size: 5rem;
    position: absolute; /* 절대 위치 설정 */
    top: -0.2em;
    right: -0.4em;
  }
`;

function CategoryName({ children, ...props }) {
  return (
    <Wrapper {...props}>
      {children} <span className="cate-point"> .</span>
    </Wrapper>
  );
}

export default CategoryName;
