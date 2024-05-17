import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  color: white;
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: 120px;
  .all-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  .category {
    font-size: 2.2rem;
    border-radius: 10px;
    font-weight: 700;
    position: relative;
    display: inline;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: white;
    }
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

  h2 {
    font-weight: 500;
    background-color: #db4455;
    color: black;
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h3 {
    font-weight: 400;
    margin-right: 10px;
  }

  .coding-desc {
    display: flex;
    padding-left: 10px;
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
                <h2>Frontend-tools</h2>
                <div className="coding-desc">
                  <h3>React</h3>
                  <div>
                    <p>• 컴포넌트 기반 UI를 만들고 관리합니다.</p>
                    <p>
                      • 재사용 가능한 구성 요소를 만들어 개발 생산성을
                      향상시킵니다.
                    </p>
                  </div>
                </div>
                <div className="coding-desc">
                  <h3>React</h3>
                  <div>
                    <p>• 컴포넌트 기반 UI를 만들고 관리합니다.</p>
                    <p>
                      • 재사용 가능한 구성 요소를 만들어 개발 생산성을
                      향상시킵니다.
                    </p>
                  </div>
                </div>
                <div className="coding-desc">
                  <h3>React</h3>
                  <div>
                    <p>• 컴포넌트 기반 UI를 만들고 관리합니다.</p>
                    <p>
                      • 재사용 가능한 구성 요소를 만들어 개발 생산성을
                      향상시킵니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="contents-tools">
                <div className="contents-design">
                  <h2>Design</h2>
                  <div className="coding-desc">
                    <h3>React</h3>
                    <div>
                      <p>• 컴포넌트 기반 UI를 만들고 관리합니다.</p>
                      <p>
                        • 재사용 가능한 구성 요소를 만들어 개발 생산성을
                        향상시킵니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contents-communication">
                  <h2>Communication</h2>
                  <div className="coding-desc">
                    <h3>React</h3>
                    <div>
                      <p>• 컴포넌트 기반 UI를 만들고 관리합니다.</p>
                      <p>
                        • 재사용 가능한 구성 요소를 만들어 개발 생산성을
                        향상시킵니다.
                      </p>
                    </div>
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
