import Footer from "@components/Footer";
import Header from "@components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    padding: 80px 0;
    margin: 0 auto;
  }
`;

function Layout() {
  return (
    <Wrapper>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
