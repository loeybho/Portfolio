import CategoryName from "@components/CategoryName";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  color: #111111;
  padding: 0 20px;
  padding-top: 80px;
  padding-bottom: 80px;
  .all-wrapper {
    max-width: 800px;
    margin: 0 auto;
    min-width: 390px;
  }

  .all-contents {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 500;
  }

  .contents {
    margin-top: 20px;
  }

  .contents-career {
    border-bottom: solid white 1px;
    padding: 40px 0;

    &:hover {
      background-color: #f5cc17;
      color: #111111;
      transition: background-color 0.3s;
    }
  }

  h2 {
    font-weight: 700;
    padding-bottom: 20px;
  }

  .contents-header {
    display: flex;
  }

  .contents-header h2 {
    flex-grow: 1;
  }

  .contents-header p {
    color: gray;
  }

  p {
    padding: 4px 0;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 700px) {
    .contents-header {
      flex-direction: column;
    }
  }
`;

function Resume() {
  return (
    <>
      <Wrapper>
        <div className="all-wrapper">
          <CategoryName>Resume</CategoryName>

          <div className="all-contents">
            <div className="contents">
              <div className="contents-career">
                <div className="contents-header">
                  <h2>
                    멋쟁이 사자처럼 프론트엔드 스쿨 수료 (프로젝트 팀장 &
                    프론트엔드 개발자)
                  </h2>
                  <p>2023.12.01~ 2024.04.26</p>
                </div>
                <div>
                  <p>
                    • 기획, 디자인, 개발 일정 조율 및 팀원들간의 협력 및 업무
                    조직화
                  </p>
                  <p>
                    • CSS, HTML, Javascript, React 등 실제 개발 경험을 통해
                    프로그래밍 스킬 향상
                  </p>
                  <p>• UI/UX 디자인 원리와 웹사이트 구조에 대한 이해 향상</p>
                </div>
              </div>
              <div className="contents-career">
                <div className="contents-header">
                  <h2>고수 레스토랑 (브랜딩 디자이너)</h2>
                  <p>2023.02.01~ 2023.11.21</p>
                </div>

                <p>
                  • 4개의 지점에서 사용할 명함, 포스터, 배너 등 다양한 디자인
                  요소 제작
                </p>
                <p>
                  • 각 지점의 특성과 메시지를 고려한 디자인 개발, 브랜드
                  톤앤매너를 유지하여 일관된 브랜딩 구축
                </p>
                <p>
                  • SNS를 통해 프로모션 및 새로운 메뉴 소개 등의 콘텐츠를
                  계획하고 게시하여 고객과의 상호작용 증진
                </p>
              </div>
              <div className="contents-career">
                <div className="contents-header">
                  <h2>올라운더 마케팅 (퍼포먼스 디자이너)</h2>
                  <p>2023.12.01~ 2024.04.26</p>
                </div>

                <p>
                  • 브랜드의 소구점을 파악하여 기획, 후킹 카피 작성, 이미지 등
                  전반적인 광고 디자인 제작
                </p>
                <p>
                  • 분석된 광고 캠페인의 결과를 기반으로 광고 성과 향상을 위한
                  전략 수립
                </p>
                <p>
                  • 클라이언트와의 원활한 커뮤니케이션을 유지하여 프로젝트의
                  목표 달성
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Resume;
