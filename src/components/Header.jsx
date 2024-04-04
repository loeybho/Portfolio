import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { toggleModeState } from "./recoil/atom.mjs";

function Header() {
  useEffect(() => {
    console.log("모드 전환");
  });

  const setIsBlackMode = useSetRecoilState(toggleModeState);
  const toggleMode = () => setIsBlackMode(!isBlackMode);

  return (
    <>
      <button onClick={toggleMode}>토글 버튼</button>
      <div></div>
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
