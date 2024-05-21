import styled from "styled-components";

const Wrapper = styled.div`
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

    gap: 10px;
    font-size: 1.8rem;
    line-height: 1.285;
    font-weight: 300;
    height: 350px;
  }

  .contents-header {
    text-align: center;
  }

  .contents {
    margin-top: 20px;
  }

  .contents-item {
    display: flex;
    height: 340px;
    gap: 20px;
  }

  .item-thumb {
    width: 400px;
    box-shadow: inset 0 0 20px red;
  }

  .item-story {
    width: 400px;
    box-shadow: inset 0 0 20px blue;
  }

  @media screen and (max-width: 700px) {
    .contents-item {
      flex-direction: column;
    }

    .item-thumb {
      width: 100%;
      height: 100%;
    }

    .item-story {
      width: 100%;
      height: 100%;
    }
  }
`;

function Projects() {
  return (
    <>
      <Wrapper>
        <div className="all-wrapper">
          <h1 className="category">Projects</h1>
          <div className="all-contents">
            <div className="contents-item">
              <div className="item-thumb">thumb</div>
              <div className="item-story">story</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Projects;
