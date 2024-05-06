import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  font-size: 0.8rem;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Footer() {
  return (
    <>
      <Wrapper>
        <h1>
          © Powered by{" "}
          <Link to="https://github.com/loeybho" target="_blank">
            오별
          </Link>
        </h1>
      </Wrapper>
    </>
  );
}

export default Footer;
