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

  .contents {
    margin-top: 20px;
  }

  .contents-career {
    background-color: #db4455;
  }
`;

function Resume() {
  return (
    <>
      <Wrapper>
        <div className="all-wrapper">
          <h1 className="category">Resume</h1>

          <div className="all-contents">
            <div className="contents">
              <div className="contents-career">
                <h2>멋쟁이 사자처럼(프로젝트 팀장)</h2>
                <p>이력</p>
                <p>• 무슨일을 했냐면</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Resume;
