import CustomSwiper from "@components/CustomSwiper";
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
                <p>
                  그래픽 디자이너로 약 2년 간 고객의 클릭을 유도하는 이미지를
                  만들었습니다.
                  <br />
                  의도한 바를 화면에 구현하고, 사용자의 행동을 유도하는 것에
                  흥미가 생겨 프론트엔드 개발을 배우기 시작했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default AboutMe;
