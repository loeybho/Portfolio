import Button from "@components/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  .thumb-img {
    width: 25vw;
    max-width: 300px;
    min-width: 200px;
  }

  color: #1a1a1a;
  font-size: 2rem;

  .all-wrapper {
    margin-top: 40px;
    display: flex;
    align-items: center;
  }

  .profile {
    flex-grow: 1;
  }

  @media screen and (max-width: 430px) {
    .all-wrapper {
      flex-direction: column;
    }
    .profile-thumb {
      order: -1; /* 추가: 이미지를 텍스트 위로 이동 */
    }
  }
`;

function Home() {
  return (
    <Wrapper>
      <div className="all-wrapper">
        <div className="profile">
          <h1>
            안녕하세요👋🏼 <br />
            프론트엔드 개발자 <br />
            오별입니다.
          </h1>

          <Link to="https://donoteatpasta.tistory.com/" target="_blank">
            <Button backgroundColor="#f05d4f" hoverColor="#f3796d">
              Blog
            </Button>
          </Link>
          <Link to="https://github.com/loeybho" target="_blank">
            <Button>Github</Button>
          </Link>
        </div>
        <div className="profile-thumb">
          <img className="thumb-img" src="./byeol.png" />
        </div>

        <div className="eye-out">
          <div className="eye-inner"></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
