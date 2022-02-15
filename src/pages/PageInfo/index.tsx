import React from 'react';
import styled from 'styled-components';
import NavBarTop from '../../components/NavBarTop';
import { SearchBar, TitleBar } from './style';

function PageInfo() {
  return (
    <>
      <NavBarTop />
      <TitleBar>
        <SearchBar></SearchBar>
      </TitleBar>
    </>
  );
}

export default PageInfo;
