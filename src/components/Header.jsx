import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <span>토글 버튼</span>
      <span>portfolio</span>
      <Link to="https://donoteatpasta.tistory.com/" target="_blank">
        블로그
      </Link>
      <Link to="https://github.com/loeybho" target="_blank">
        깃허브
      </Link>
    </>
  );
}

export default Header;
