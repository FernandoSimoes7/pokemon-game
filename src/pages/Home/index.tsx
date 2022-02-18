import React from "react";
import styled from "styled-components";
import DashBoard from "../../components/DashBoard";
import NavBarTop from "../../components/NavBarTop";
import SideBar from "../../components/SideBar";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Home: React.FC = () => {
  return (
    <>
      <NavBarTop />
      <Container>
        <SideBar />
        <DashBoard />
      </Container>
    </>
  );
};

export default Home;
