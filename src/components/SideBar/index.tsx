import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, DivList, Item, List, Title } from './style';

function SideBar() {
  return (
    <Container>
      <Title>POKEMONS</Title>
      <DivList>
        <List>
          <Item>Poke 01</Item>
          <Item>Poke 02</Item>
          <Item>Poke 03</Item>
          <Item>Poke 04</Item>
          <Item>Poke 05</Item>
        </List>
      </DivList>
      <Button>
        <Link to='/info'>Informações +</Link></Button>
    </Container>
  );
}

export default SideBar;
