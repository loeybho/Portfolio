import Button from "@components/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 20px;

  .thumb-img {
    width: 25vw;
    max-width: 300px;
    min-width: 200px;
  }

  .all-wrapper {
    display: flex;
    align-items: flex-end;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.285;
    font-weight: 300;
    color: white;
  }

  .profile {
    flex-grow: 1;
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

  .text-point {
    font-weight: 400;
  }

  .name-point {
    font-weight: 700;
  }

  .button-wrapper {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }

  @media screen and (max-width: 430px) {
    .all-wrapper {
      flex-direction: column-reverse;
      gap: 30px;
    }

    h1 {
      font-size: 2.2rem;
      line-height: 1.4;
      font-weight: 300;
      color: white;
    }

    .profile {
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
    }

    .profile-thumb {
      margin: 0 auto;
    }

    .thumb-img {
      min-width: 260px;
    }

    .button-wrapper {
      justify-content: center;
    }
  }
`;

const Cover = () => {
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
    <>
      <Wrapper>
        <div className="all-wrapper">
          <div className="profile">
            <h1>
              안녕하세요! <br />
              <br />
              <div className={`${fadeIn ? "fade-in" : ""}`}>
                <span className="text-point">{phrases[textIndex]}</span>
              </div>
              프론트엔드 개발자 <br />
              <span className="name-point">오별</span>입니다.
            </h1>
            <div className="button-wrapper">
              <Link to="https://donoteatpasta.tistory.com/" target="_blank">
                <Button backgroundcolor="#f3606d" hovercolor="#f3796d">
                  Blog
                </Button>
              </Link>
              <Link to="https://github.com/loeybho" target="_blank">
                <Button>Github</Button>
              </Link>
            </div>
          </div>
          <div className="profile-thumb">
            <img className="thumb-img" src="./byeol.png" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Cover;
