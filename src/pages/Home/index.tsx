import React from 'react';
import styled from 'styled-components';

import DashBoard from '../../components/DashBoard';
import SideBar from '../../components/SideBar';
import NavBarTop from '../../components/NavBarTop';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function Home() {
  return (
    <>
      <NavBarTop />
      <Container>
        <SideBar />
        <DashBoard />
      </Container>
    </>
  );
}

export default Home;
