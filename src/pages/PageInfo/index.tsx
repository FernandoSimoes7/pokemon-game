import React from 'react';
import CardPokemon from '../../Components/CardPokemon';
import NavBarTop from '../../Components/NavBarTop';
import { BoxCards, SearchBar, TitleBar, TitleDiv } from './style';

const PageInfo: React.FC = () => {
  return (
    <>
      <NavBarTop />
      <TitleBar>
        <TitleDiv>
          <img
            src="https://fontmeme.com/permalink/220216/dfa82dbc91316d8db28f5e9df5eba887.png"
            alt="title-infos"
          />
        </TitleDiv>
        <SearchBar placeholder="Pesquisar Pokemon" type="text"></SearchBar>
      </TitleBar>
      <BoxCards>
        <CardPokemon></CardPokemon>
      </BoxCards>
    </>
  );
};

export default PageInfo;
