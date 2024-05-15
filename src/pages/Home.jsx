import Button from "@components/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  background-color: black;
  height: 100vw;

  .thumb-img {
    width: 25vw;
    max-width: 300px;
    min-width: 200px;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.285;
    font-weight: 400;
    color: white;
  }

  .all-wrapper {
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .profile {
    flex-grow: 1;
  }

  @media screen and (max-width: 430px) {
    .all-wrapper {
      flex-direction: column;
      text-align: center;
    }

    .profile-thumb {
      order: -1;
    }

    h1 {
      padding-top: 50px;
    }
  }

  .fade-in {
    opacity: 0;
    animation: fade-in-animation 1s forwards;
  }

  @keyframes fade-in-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [phrases, setPhrases] = useState([
    "훌륭한 사용자 경험을 디자인하는",
    "새로운 기술을 익히는데 유연한",
    "효율적인 코드 작성을 고민하는",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setFadeIn(true); // 페이드 인 설정
    }, 2000);

    return () => clearInterval(interval);
  }, [phrases]); // phrases 배열이 변경될 때마다 효과 적용

  // 페이드 인이 완료되면 다음 텍스트를 표시하고 페이드 인 효과 해제
  useEffect(() => {
    if (fadeIn) {
      const timeout = setTimeout(() => {
        setFadeIn(false);
      }, 1000); // 페이드 인 지속시간
      return () => clearTimeout(timeout);
    }
  }, [fadeIn]);

  return (
    <Wrapper>
      <div className="all-wrapper">
        <div className="profile">
          <h1>
            안녕하세요! <br />
            <br />
            <div className={`all-wrapper ${fadeIn ? "fade-in" : ""}`}>
              {phrases[textIndex]}
            </div>
            프론트엔드 개발자 <br />
            오별입니다.
          </h1>

          <Link to="https://donoteatpasta.tistory.com/" target="_blank">
            <Button backgroundcolor="yellow" hovercolor="#f3796d">
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
      </div>
    </Wrapper>
  );
};

export default Home;
