import React from 'react';
import { DivLogo, Container } from './style';

function NavBarTop() {
  return (
    <Container>
      <DivLogo>
        <img src="pokeapi.png" alt="Logo API" width={100}/>
      </DivLogo>
    </Container>
  );
}

export default NavBarTop;
