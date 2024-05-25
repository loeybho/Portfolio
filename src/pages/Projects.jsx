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
    padding: 20px;
    margin: 50px 0;
  }

  .item-name {
    color: #111111;
    text-align: center;
    font-weight: 700;
    font-size: 3rem;
    padding-top: 15px;
  }

  .item-body {
    display: flex;
    color: #111111;
    gap: 20px;
    padding: 30px;
  }

  .item-thumb {
    max-width: 400px;
    min-width: 350px;
    width: 100%;
    height: 100%;
  }

  .item-story {
    font-weight: 400;
    font-size: 1.6rem;
  }

  .item-date {
    color: gray;
    text-align: center;
    font-weight: 500;
    padding-top: 5px;
  }

  h3 {
    font-weight: 700;
    padding-top: 30px;
    padding-bottom: 10px;
  }

  p {
    padding: 3px 0;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 20px;
  }

  .btn {
    margin-top: 20px;
    margin-right: 10px;
  }

  .skill-set {
    display: flex;
    gap: 20px;
  }

  .skill-set p {
    color: orange;
    font-weight: 500;
  }

  @media screen and (max-width: 700px) {
    .item-body {
      flex-direction: column;
      width: 100%;
    }

    .item-thumb {
      min-width: unset;
      max-width: 100%;
      width: 100%;
    }

    img {
    }

    .btn {
      margin-top: 30px;
    }
    .btn-wrapper {
      display: flex;
      justify-content: center;
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
              <p className="item-date">2024.03.28 - 2024.04.25 (팀 프로젝트)</p>
              <div className="item-body">
                <div className="item-thumb">
                  <img src={project_1} alt="카공여지도 썸네일" />
                </div>
                <div className="item-story">
                  <p>
                    카공여지도는 공부하기 좋은 카페를 추천해주는 웹
                    어플리케이션입니다. 멋쟁이사자처럼 프론트엔드 스쿨 수업에서
                    팀을 구성해 기획, 디자인, 프론드엔드 개발까지 완성했습니다.
                  </p>

                  <div className="story-desc">
                    <h3>본인 구현 기능</h3>
                    <ul>
                      <li>
                        홈 페이지 : Swiper로 광고 이미지를 홈 화면에 띄우고,
                        데이터를 불러와 카페 리스트를 보여주었습니다.
                      </li>
                      <li>
                        카페 리스트 + 무한 스크롤 : React Query로 카페 리스트를
                        불러오고, 무한 스크롤로 데이터를 6개씩 불러와 데이터
                        로딩 속도를 개선했습니다.
                      </li>
                      <li>
                        북마크 + 북마크 리스트 : 특정 유저가 저장한 카페의
                        동일한 순서가 담긴 id 값을 추가, 제거할 수 있는 북마크
                        기능을 구현하였습니다.
                      </li>
                      <li>리뷰 리스트 : 저장된 리뷰 리스트를 불러왔습니다.</li>
                    </ul>
                  </div>

                  <h3>기술스택</h3>
                  <div className="skill-set">
                    <p>React</p>
                    <p>Axios</p>
                    <p>Swiper</p>
                    <p>Recoil</p>
                  </div>

                  <div className="btn-wrapper">
                    <Link to="https://cagongmap.netlify.app/" target="_blank">
                      <Button
                        style={{
                          border: "2px solid black",
                          borderRadius: "50px",
                          color: "black",
                        }}
                        className="btn"
                      >
                        배포 URL
                      </Button>
                    </Link>
                    <Link to="https://github.com/loeybho" target="_blank">
                      <Button
                        style={{
                          border: "2px solid black",
                          borderRadius: "50px",
                          color: "black",
                        }}
                        className="btn"
                      >
                        Github
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="contents-item">
              <h1 className="item-name">원더렌즈</h1>
              <p className="item-date">
                2024.05.06 - 2024.05.11 (개인 프로젝트)
              </p>
              <div className="item-body">
                <div className="item-thumb">
                  <img src={project_2} alt="원더렌즈" />
                </div>
                <div className="item-story">
                  <p>
                    원더렌즈는 방문했던 여행지의 사진을 모은 웹사이트입니다.
                    심플한 UI에 반응형 디자인을
                  </p>

                  <div className="story-desc">
                    <h3>구현 기능</h3>

                    <ul>
                      <li>
                        구글 Map API를 활용하여 지도를 띄우고, 여행갔던 나라에
                        핀을 꽂았습니다.
                      </li>
                      <li>
                        심플한 UI를 그릴 예정이라 Tailwind를 사용하였습니다.
                      </li>
                      <li>
                        반응형 디자인을 적용하여 모바일 환경에도 적합하게
                        만들었고, 모바일 버전엔 햄버거 메뉴바로 카테고리 이동을
                        용이하게 하였습니다.
                      </li>
                    </ul>
                  </div>

                  <h3>기술스택</h3>
                  <div className="skill-set">
                    <p>React</p>
                    <p>Tailwind</p>
                  </div>

                  <div className="btn-wrapper">
                    <Link
                      to="https://throughwanderlens.netlify.app/"
                      target="_blank"
                    >
                      <Button
                        style={{
                          border: "2px solid black",
                          borderRadius: "50px",
                          color: "black",
                        }}
                        className="btn"
                      >
                        배포 URL
                      </Button>
                    </Link>
                    <Link
                      to="https://github.com/loeybho/WanderLens?tab=readme-ov-file"
                      target="_blank"
                    >
                      <Button
                        style={{
                          border: "2px solid black",
                          borderRadius: "50px",
                          color: "black",
                        }}
                        className="btn"
                      >
                        Github
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="contents-item">
              <h1 className="item-name">포트폴리오</h1>
              <p className="item-date">2024.05.03 - 현재 (개인 프로젝트)</p>
              <div className="item-body">
                <div className="item-thumb">
                  <img src={project_3} alt="포트폴리오 이미지" />
                </div>
                <div className="item-story">
                  <p>
                    저에 대한 정보와 개발 프로젝트를 모은 포트폴리오
                    웹사이트입니다. 저의 지난 경험과 현재의 태도, 가치관을
                    담았습니다.
                  </p>

                  <div className="story-desc">
                    <h3>구현 기능</h3>
                    <ul>
                      <li>
                        React Sroll을 사용하여 페이지 내 탐색을 편리하고,
                        효율적으로 구현했습니다.
                      </li>
                      <li>
                        버튼 컴포넌트에 GSAP 애니메이션을 적용하여 시각적인
                        효과를 향상시켰습니다.
                      </li>
                      <li>
                        styled-components로 스타일을 구현할 때 CSS 리셋을
                        적용하여 크로스 브라우저의 호환성 문제를 예방하였습니다.
                      </li>
                    </ul>
                  </div>

                  <h3>기술스택</h3>
                  <div className="skill-set">
                    <p>React</p>
                    <p>Styled-component</p>
                    <p>GSAP</p>
                  </div>

                  <div className="btn-wrapper">
                    <Link
                      to="https://byeolportfolio.netlify.app/"
                      target="_blank"
                    >
                      <Button
                        style={{
                          border: "2px solid black",
                          borderRadius: "50px",
                          color: "black",
                        }}
                        className="btn"
                      >
                        배포 URL
                      </Button>
                    </Link>
                    <Link
                      to="https://github.com/loeybho/Portfolio"
                      target="_blank"
                    >
                      <Button
                        style={{
                          border: "2px solid black",
                          borderRadius: "50px",
                          color: "black",
                        }}
                        className="btn"
                      >
                        Github
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Projects;
