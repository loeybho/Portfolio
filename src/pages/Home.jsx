import { useEffect } from "react";
import useToggle from "@zustand/toggle.js";

function Home() {
  useEffect(() => {
    console.log("Right3 렌더링");
  });

  const { bears, toggleOn } = useToggle();
  return (
    <div className="home">
      <h1>
        <div>{bears ? "bears are here" : "No Bears!"}</div>
        <button onClick={toggleOn}>클릭</button>
      </h1>

      <h1>
        안녕하세요👋🏼 <br />
        프론트엔드 개발자 <br />
        오별입니다.
      </h1>
    </div>
  );
}

export default Home;
