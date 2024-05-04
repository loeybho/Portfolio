import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
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
  );
}

export default Home;
