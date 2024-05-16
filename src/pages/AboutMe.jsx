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
`;

function AboutMe() {
  return (
    <Wrapper>
      <div className="all-wrapper">
        <h1>About Me</h1>
        <h2>그래픽 디자이너에서 프론트엔드 개발까지</h2>
        <p>
          상세페이지와 광고 이미지를 만들었던 저는, 고객의 클릭을 유도하는
          이미지를 만들었습니다. 이에 흥미가 생겨 프론트엔드 개발을 배우기
          시작했습니다.
        </p>
      </div>
    </Wrapper>
  );
}

export default AboutMe;
