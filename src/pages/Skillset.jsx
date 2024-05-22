import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: 50px;
  width: 100%;

  .all-wrapper {
    max-width: 800px;
    margin: 0 auto;
    min-width: 390px;
  }

  h1 {
    font-weight: 700;
    font-size: 2.2rem;
  }

  .category {
    border-bottom: solid 2px white;
    display: inline;
    padding-bottom: 2px;
    font-size: 2.2rem;
  }

  .all-contents {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    line-height: 1.285;
    font-weight: 300;
  }

  .contents-header {
    text-align: center;
  }

  .contents {
    margin-top: 20px;
  }
  .contents-tools {
    display: flex;
    padding: 20px 0;
    gap: 30px;
  }

  .contents-design {
    width: 400px;
  }

  p {
    padding-bottom: 10px;
  }

  div {
    padding-bottom: 10px;
  }

  h2 {
    font-weight: 500;
    background-color: #fef37d;
    color: black;
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  h3 {
    font-weight: 400;
    margin-right: 10px;
  }

  .coding-desc {
    display: flex;
    padding-left: 10px;
  }

  @media screen and (max-width: 700px) {
    .contents-tools {
      flex-direction: column;
    }

    .contents-coding {
      flex-wrap: wrap;
    }

    .coding-desc {
      flex-wrap: wrap;
    }

    h3 {
      padding: 20px 0;
    }
  }
`;

function Skillset() {
  return (
    <>
      <Wrapper>
        <div className="all-wrapper">
          <h1 className="category">Skill Set</h1>

          <div className="all-contents">
            <div className="contents">
              <div className="contents-coding">
                <h2>Frontend-tools 👩‍💻</h2>
                <div className="coding-desc">
                  <h3>React</h3>
                  <div>
                    <p>• 컴포넌트 기반 UI를 만들고 관리할 수 있습니다.</p>
                    <p>
                      • 재사용 가능한 구성 요소를 만들어 프로젝트의 효율성과
                      일관성, 개발 생산성을 향상시킬 수 있습니다.
                    </p>
                  </div>
                </div>
                <div className="coding-desc">
                  <h3>Javascript</h3>
                  <div>
                    <p>• 동적인 웹페이지를 구현할 수 있습니다.</p>
                    <p>
                      • 사용자의 동작에 따른 이벤트 처리 함수를 호출할 수
                      있습니다.
                    </p>
                  </div>
                </div>
                <div className="coding-desc">
                  <h3>HTML, CSS</h3>
                  <div>
                    <p>
                      • 웹 디자인 및 레이아웃 구성을 위한 기초적인 기술을
                      보유하고 있습니다.
                    </p>
                    <p>• 반응형 웹 디자인을 구현할 수 있습니다.</p>
                    <p>
                      • 다양한 브라우저에서 발생하는 크로스 브라우징 이슈를
                      해결한 경험이 있습니다.
                    </p>
                    <p>
                      • CSS를 활용하여 웹 페이지에 애니메이션 효과를 넣을 수
                      있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="contents-tools">
                <div className="contents-design">
                  <h2>Design 🎨</h2>
                  <div className="coding-desc">
                    <h3>Figma</h3>
                    <h3>Photoshop</h3>
                    <h3>Illustrator</h3>
                    <h3>PremierePro</h3>
                  </div>
                </div>
                <div className="contents-communication">
                  <h2>Communication 📓</h2>
                  <div className="coding-desc">
                    <h3>Notion</h3>
                    <div></div>
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

export default Skillset;
