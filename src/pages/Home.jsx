import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  .thumb-img {
    width: 25vw;
  }

  color: #1a1a1a;
  font-size: 2rem;
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
            블로그
          </Link>
          <Link to="https://github.com/loeybho" target="_blank">
            깃허브
          </Link>
        </div>
        <div className="profile-thumb">
          <img className="thumb-img" src="./byeol.png" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
