import Footer from "@components/Footer";

import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    margin: 0 auto;
  }
`;

function Layout() {
  return (
    <Wrapper>
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
