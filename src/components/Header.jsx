import { Link } from "react-router-dom";
import styled from "styled-components";
import useToggle from "@zustand/toggle.js";

const Wrapper = styled.div`
  .all-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  font-weight: 700;
  width: 100%;
  height: 80px;
  border-bottom: solid 1px white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);

  .all-wrapper {
    display: flex;
    height: 100%;
    align-items: center;
  }
  .header {
    flex-grow: 1;
  }

  .nav-item{
    &:hover {
      color: darkgray;
    }
  
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background-color: darkgray;
      position: absolute
      left: 0;
      transition: width 0.3s ease;
    }
  
    &:hover::after {
      width: 100%;
    }
  }
`;

function Header() {
  const { bears, toggleOn } = useToggle();
  return (
    <>
      <Wrapper>
        <div className="all-wrapper">
          <div className="header">
            <Link to="/">Byeol Oh</Link>
          </div>
          <div className="nav-item">
            <Link to="/resume">Resume</Link>
          </div>
          <div className="nav-item">
            <Link to="/projects">Projects</Link>
          </div>
          <h1>
            <div>{bears ? "o" : "x"}</div>
            <button onClick={toggleOn}>클릭</button>
          </h1>
        </div>
      </Wrapper>
    </>
  );
}

export default Header;
