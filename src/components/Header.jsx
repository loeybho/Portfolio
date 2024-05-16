import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  font-weight: 700;
  font-size: 1.8rem;
  width: 100%;
  height: 80px;
  border-bottom: solid 1px black;
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

  .header-logo {
    &:hover {
      color: #fef37d;
      transition: 0.3s ease;
    }
  }

  .navbar {
    display: flex;
  }

  .nav-item{
    margin-left: 20px;
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

  @media screen and (max-width: 430px) {
      .header p {
        display: none;
      }
  }

`;

function Header() {
  return (
    <>
      <Wrapper>
        <div className="all-wrapper">
          <div className="header-wrapper">
            <Link to="/">
              <div className="header">
                <img src="/byeol.png" />
                <p className="header-logo">Portfolio</p>
              </div>
            </Link>
          </div>

          <nav>
            <ul className="navbar">
              <li className="nav-item">
                <Link to="/resume">Resume</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </>
  );
}

export default Header;
