import styled from "styled-components";
import project_1 from "@assets/project_1.png";
import Button from "@components/Button";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  color: white;
  padding: 0 20px;

  .all-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  .all-contents {
    gap: 10px;
    font-size: 1.8rem;
    line-height: 1.285;
    font-weight: 300;
  }

  .category {
    border-bottom: solid 2px white;
    display: inline-block;
  }

  .contents-item {
    margin: 10px 0;
    display: inline-block;
  }

  .item-thumb {
    width: 400px;
  }

  .item-story {
    width: 400px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 20px;
  }

  h1 {
    font-weight: 700;
    font-size: 2.4rem;
    margin: 20px 0;
  }

  p {
    margin: 8px 0;
  }

  @media screen and (max-width: 700px) {
    .contents-item {
      flex-direction: column;
    }

    .item-thumb {
      width: 100%;
      height: 100%;
    }

    .item-story {
      width: 100%;
      height: 100%;
    }
  }
`;

function Projects() {
  return (
    <>
      <Wrapper>
        <div className="all-wrapper">
          <h1 className="category">Projects</h1>
          <div className="all-contents">
            <div className="contents-item">
              <div className="item-thumb">
                <Link to="https://cagongmap.netlify.app/" target="_blank">
                  <img src={project_1} alt="카공여지도 썸네일" />
                </Link>
              </div>
              <div className="item-story">
                <h1>카공여지도</h1>
                <p>공부하기 좋은 카페를 추천해주는 웹 어플리케이션입니다.</p>
                <p>팀 프로젝트</p>
                <p>React, Axios, Swiper, Recoil</p>
                <Link to="https://github.com/loeybho" target="_blank">
                  <Button>Github</Button>
                </Link>
              </div>
            </div>

            <div className="contents-item">
              <div className="item-thumb">
                <Link to="https://cagongmap.netlify.app/" target="_blank">
                  <img src={project_1} alt="카공여지도 썸네일" />
                </Link>
              </div>
              <div className="item-story">
                <h1>카공여지도</h1>
                <p>공부하기 좋은 카페를 추천해주는 웹 어플리케이션입니다.</p>
                <p>팀 프로젝트</p>
                <p>React, Axios, Swiper, Recoil</p>
                <Link to="https://github.com/loeybho" target="_blank">
                  <Button>Github</Button>
                </Link>
              </div>
            </div>

            <div className="contents-item">
              <div className="item-thumb">
                <Link to="https://cagongmap.netlify.app/" target="_blank">
                  <img src={project_1} alt="카공여지도 썸네일" />
                </Link>
              </div>
              <div className="item-story">
                <h1>카공여지도</h1>
                <p>공부하기 좋은 카페를 추천해주는 웹 어플리케이션입니다.</p>
                <p>팀 프로젝트</p>
                <p>React, Axios, Swiper, Recoil</p>
                <Link to="https://github.com/loeybho" target="_blank">
                  <Button>Github</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Projects;
