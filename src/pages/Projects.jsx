import styled from "styled-components";
import project_1 from "@assets/project_1.png";
import project_2 from "@assets/project_2.png";
import project_3 from "@assets/project_3.png";
import Button from "@components/Button";
import { Link } from "react-router-dom";
import CategoryName from "@components/CategoryName";

const Wrapper = styled.div`
  padding: 80px 20px;

  .all-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  .category {
    border-bottom: solid 2px white;
    display: inline-block;
    margin-bottom: 60px;
  }

  .all-contents {
    font-size: 1.8rem;
    line-height: 1.285;
    font-weight: 300;
    gap: 10px;
  }

  .contents-item {
    background-color: white;
    border-radius: 20px;
  }

  .item-name {
    color: #111111;
    text-align: center;
    font-weight: 700;
    font-size: 3rem;
  }

  .item-body {
    display: flex;
    color: #111111;
    gap: 20px;
  }

  .item-thumb {
    max-width: 360px;
    width: 100%;
  }

  .item-story {
  }

  .item-date {
    color: gray;
    text-align: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 20px;
  }

  .btn-github {
    margin-top: 20px;
  }

  @media screen and (max-width: 700px) {
    .item-body {
      flex-direction: column;

      width: 100%;
      padding: 30px;
    }
    .item-thumb {
      max-width: 100%;
    }
  }
`;

function Projects() {
  return (
    <>
      <Wrapper>
        <div className="all-wrapper">
          <CategoryName>Projects</CategoryName>
          <div className="all-contents">
            <div className="contents-item">
              <h1 className="item-name">카공여지도</h1>
              <p className="item-date">기간 (팀 프로젝트)</p>
              <div className="item-body">
                <div className="item-thumb">
                  <Link to="https://cagongmap.netlify.app/" target="_blank">
                    <img src={project_1} alt="카공여지도 썸네일" />
                  </Link>
                </div>
                <div className="item-story">
                  <p>공부하기 좋은 카페를 추천해주는 웹 어플리케이션</p>
                  <p>팀 프로젝트</p>
                  <p>React, Axios, Swiper, Recoil</p>
                  <Link to="https://github.com/loeybho" target="_blank">
                    <Button
                      style={{
                        border: "2px solid black",
                        borderRadius: "50px",
                        color: "black",
                      }}
                      className="btn-github"
                    >
                      Github
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="contents-item">
              <div className="item-thumb">
                <Link
                  to="https://throughwanderlens.netlify.app/"
                  target="_blank"
                >
                  <img src={project_2} alt="원더렌즈 썸네일" />
                </Link>
              </div>
              <div className="item-story">
                <h1>원더렌즈</h1>
                <p>여행했던 곳의 사진을 담은 웹 사이트</p>
                <p>개인 프로젝트</p>
                <p>React, 구글 지도 API</p>
                <Link
                  to="https://github.com/loeybho/WanderLens?tab=readme-ov-file"
                  target="_blank"
                >
                  <Button className="btn-github">Github</Button>
                </Link>
              </div>
            </div>

            <div className="contents-item">
              <div className="item-thumb">
                <Link to="https://byeolportfolio.netlify.app/" target="_blank">
                  <img src={project_3} alt="포트폴리오 썸네일" />
                </Link>
              </div>
              <div className="item-story">
                <h1>개인 포트폴리오</h1>
                <p>실무 작업 결과를 모은 포트폴리오 사이트</p>
                <p>개인 프로젝트</p>
                <p>React, Swiper</p>
                <Link to="https://github.com/loeybho/Portfolio" target="_blank">
                  <Button className="btn-github">Github</Button>
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
