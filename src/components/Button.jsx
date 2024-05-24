import styled from "styled-components";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const StyledButton = styled.button`
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  type: ${(props) => props.type};
`;

const Button = ({ children, ...props }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const hoverTween = gsap.to(button, {
      background: "linear-gradient(to right, orange 0%, #f5cc17 100%)",
      ease: "power1.inOut",
      duration: 0.3,
      paused: true,
    });

    button.addEventListener("mouseenter", () => {
      hoverTween.play();
    });

    button.addEventListener("mouseleave", () => {
      hoverTween.reverse();
    });

    return () => {
      button.removeEventListener("mouseenter", hoverTween.play);
      button.removeEventListener("mouseleave", hoverTween.reverse);
    };
  }, []);

  return (
    <StyledButton {...props}>
      <button
        ref={buttonRef}
        style={{
          padding: "10px 30px",
          borderRadius: "50px",
          cursor: "pointer",
          background: "transparent",
        }}
      >
        {children}
      </button>
    </StyledButton>
  );
};

export default Button;
