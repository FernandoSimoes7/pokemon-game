import React from 'react';
import { Container, DivLogo } from './style';
import logo from '../../assets/pokemon-logo.png';

const NavBarTop: React.FC = () => {
  return (
    <Container>
      <DivLogo>
        <a href="/">
          <img
            src="https://fontmeme.com/permalink/220217/9e62e0fb0516a0b07f91cf356cb31446.png"
            alt="poke-jump"
          />
        </a>
        {/* <img src={logo} alt="Logo API" /> */}
      </DivLogo>
    </Container>
  );
};

export default NavBarTop;
