import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  color: white;
  padding: 0 20px;

  .all-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
`;

function Skillset() {
  return (
    <Wrapper>
      <div className="all-wrapper">Skillset</div>
    </Wrapper>
  );
}

export default Skillset;
