import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  color: white;
  padding: 0 20px;
  height: 100vh;
  padding-top: 20px;
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

  .contents {
    margin-top: 20px;
    box-shadow: inset 0 0 20px red;
    font-size: 1.6rem;
    line-height: 1.285;
  }
`;

function AboutMe() {
  return (
    <>
      <Wrapper>
        <div className="all-wrapper">
          <h1 className="category">About Me</h1>
          <div className="contents">
            <p>Connect the dots</p>
            <h2>그래픽 디자인에서 프론트엔드 개발까지</h2>
            <p>
              그래픽 디자이너로 약 2년 간 근무했던 저는
              <br />
              고객의 클릭을 유도하는 이미지를 만들었습니다.
              <br />
              이에 흥미가 생겨 프론트엔드 개발을 배우기 시작했습니다.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default AboutMe;
