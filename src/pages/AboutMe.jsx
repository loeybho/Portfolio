import CustomSwiper from "@components/CustomSwiper";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: 120px;

  .all-wrapper {
    max-width: 800px;
    margin: 0 auto;
    min-width: 390px;
  }

  h1 {
    font-weight: 700;
    font-size: 4rem;
  }

  .category {
    border-bottom: solid 2px white;
    display: inline;
    padding-bottom: 2px;
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
    font-family: "NotoSans";
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.4px;
  }

  .contents-header {
    text-align: center;
  }

  .contents {
    margin-top: 20px;
  }
`;

function AboutMe() {
  return (
    <>
      <Wrapper>
        <div className="all-wrapper">
          <h1 className="category">About Me</h1>

          <div className="all-contents">
            <div className="contents-header">
              <p>I aspire to be a Good Creator</p>
            </div>
            <div className="contents">
              <div>
                <CustomSwiper />
              </div>
              <div>
                <h2>그래픽 디자인에서 프론트엔드 개발까지</h2>
                <div className="contents">
                  <p>
                    그래픽 디자이너로 약 2년 간 고객과 상호작용하고, 클릭을
                    사로잡는 콘텐츠를 만들었습니다.
                    <br />
                    의도한 바를 화면에 구현하고, 사용자의 행동을 유도하는
                    디자인에 흥미가 생겨 UX, UI와 프론트엔드 개발을 배우기
                    시작했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default AboutMe;
