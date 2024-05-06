import { Link } from "react-router-dom";
import styled from "styled-components";
import useToggle from "@zustand/toggle.js";

const Wrapper = styled.div`
  color: white;
  font-weight: 700;
  width: 100%;
  height: 80px;
  border-bottom: solid 1px white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(1, 1, 1, 0.90);
  padding: 0 20px;

  .all-wrapper {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    align-items: center;
  }

  .header-wrapper {
    flex-grow: 1;
  }

  .header {
    display: flex;
    align-items: center;
  }
  

  .header img {
    max-width: 35px;
    margin-right: 10px;
  }

  .header span {
    font-size: 1.2rem;
  }

  .nav-item{
    &:hover {
      color: #fef37d;
    }
  
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background-color: #fef37d;
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
          <div className="header-wrapper">
            <Link to="/">
              <div className="header">
                <img src="./byeol.png" />
                <span>별이의 포트폴리오</span>
              </div>
            </Link>
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
