import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  color: white;
  padding: 0 20px;
  height: 100vh;
  padding-top: 20px;
  .all-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
`;

function Resume() {
  return (
    <Wrapper>
      <div className="all-wrapper">Resume</div>
    </Wrapper>
  );
}

export default Resume;
