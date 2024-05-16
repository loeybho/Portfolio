import Cover from "@pages/Cover";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import Skillset from "@pages/Skillset";
import Resume from "@pages/Resume";
import Projects from "@pages/Projects";

const Wrapper = styled.div``;

const NavWrapper = styled.div`
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
    max-width: 40px;
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

  .nav-menu {
    display: none;
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
}

    @media screen and (max-width: 430px) {
      .header-logo {
        display: none;
      }

      .nav-item {
        display: none;
      }

      .nav-menu {
        display: flex;
      }
    }
    

`;

const Home = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <NavWrapper>
        <div className="all-wrapper">
          <div className="header-wrapper">
            <Link
              activeClass="active"
              to="cover"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div className="header">
                <img src="/byeol.png" />
                <p className="header-logo">Portfolio</p>
              </div>
            </Link>
          </div>

          <nav>
            <ul className="navbar">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <button className="nav-menu">
                  <img src="/menu.svg" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </NavWrapper>
      <Wrapper>
        <div id="cover">
          <Cover />
        </div>
        <div id="skillset">
          <Skillset />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
