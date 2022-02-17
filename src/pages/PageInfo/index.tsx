import React from 'react';
import NavBarTop from '../../Components/NavBarTop';
import { BoxCards, SearchBar, TitleBar, TitleDiv } from './style';

const PageInfo: React.FC = () => {
  return (
    <>
      <NavBarTop />
      <TitleBar>
        <TitleDiv>
          <a href="/">
            <img
              src="https://fontmeme.com/permalink/220216/dfa82dbc91316d8db28f5e9df5eba887.png"
              alt="title-infos"
            />
          </a>
        </TitleDiv>
        <SearchBar placeholder="Pesquisar Pokemon" type="text"></SearchBar>
      </TitleBar>
      <BoxCards></BoxCards>
    </>
  );
};

export default PageInfo;
