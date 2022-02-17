import React from 'react';
import styled from 'styled-components';
import DashBoard from '../../Components/DashBoard';
import NavBarTop from '../../Components/NavBarTop';
import SideBar from '../../Components/SideBar';

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
