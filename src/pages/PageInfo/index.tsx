import React from 'react';
import styled from 'styled-components';
import NavBarTop from '../../components/NavBarTop';
import { Atributes, BoxInfo, CardsInfo, Icon, Name, SearchBar, Title, TitleBar } from './style';
import img from '../../assets/pokebolas.jpg';

function PageInfo() {
  return (
    <>
      <NavBarTop />
      <TitleBar>
        <Title>Informações dos Pokemóns</Title>
        <SearchBar placeholder='Pesquisar Pokemon'></SearchBar>
      </TitleBar>
      <CardsInfo>
        <BoxInfo>
          <Name><p>Bulbasaur</p><small>#001</small></Name>
          <Icon><img src="" alt="icon bulbasaur"/></Icon>
          <Atributes><p>Altura</p><p>0.00m</p></Atributes>
          <Atributes><p>Peso</p><p>00kg</p></Atributes>
        </BoxInfo>
      </CardsInfo>
    </>
  );
}

export default PageInfo;
