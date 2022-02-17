import React from 'react';
import { Container, DivLogo } from './style';

const NavBarTop: React.FC = () => {
  return (
    <Container>
      <DivLogo>
        <img src="pokeapi.png" alt="Logo API" width={100} />
      </DivLogo>
    </Container>
  );
};

export default NavBarTop;
