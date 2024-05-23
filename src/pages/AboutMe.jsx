import CategoryName from "@components/CategoryName";
import CustomSwiper from "@components/CustomSwiper";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 80px 20px;

  .all-wrapper {
    max-width: 800px;
    margin: 0 auto;
    min-width: 390px;
  }

  .all-contents {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
  }

  .contents-main {
    display: flex;
    padding: 80px 0;
  }

  .main-header {
    font-size: 2rem;
    font-weight: 700;
    flex-grow: 1;
  }

  .main-contents {
    max-width: 400px;
    line-height: 1.6;
  }

  .profile-keyword {
    display: flex;
    justify-content: space-between;
    box-shawdow: inset 0 0 20px red;
    min-width: 400px;
    text-align: center;
  }

  .keyword-icon {
    padding: 10px;
    border-radius: 20px;
    border: solid 2px white;
  }

  @media screen and (max-width: 700px) {
    .contents-main {
      flex-direction: column;
    }
    .main-header {
      padding-bottom: 20px;
    }
  }
`;

function AboutMe() {
  return (
    <>
      <Wrapper>
        <div className="all-wrapper">
          <CategoryName>About Me</CategoryName>

          <div className="all-contents">
            <div className="contents-main">
              <p className="main-header">keyword</p>
              <div className="profile-keyword">
                <p className="keyword-icon">책임감</p>
                <p className="keyword-icon">유연함</p>
                <p className="keyword-icon">커뮤니케이션</p>
              </div>
            </div>
            <div className="contents-main">
              <p className="main-header">I aspire to be a Good Creator</p>
              <div className="main-contents">
                <p>
                  마케팅 에이전시, 프리랜서 디자이너로 근무하여 2년 간 20개
                  이상의 브랜드를 디자인했습니다. 동적인 화면을 만들어, 사용자의
                  행동을 유도하는 작업에 관심이 생겨 UX, UI와 프론트엔드 개발을
                  배우기 시작했습니다.
                </p>
              </div>
            </div>

            <CustomSwiper />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default AboutMe;
