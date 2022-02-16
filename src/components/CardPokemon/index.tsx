import React from 'react';
import { Container, Div, Icon, Atributes } from './style';

function CardPokemon() {
  return (
    <Container>
      <Div>
        <p>Bulbasaur</p>
        <small>#001</small>
      </Div>
      <Icon>
        <img src="" alt="icon bulbasaur" />
      </Icon>
      <Div>
        <Atributes>
          <p>Altura</p>
          <p>0.00m</p>
        </Atributes>
      </Div>
      <Div>
        <Atributes>
          <p>Peso</p>
          <p>00kg</p>
        </Atributes>
      </Div>
    </Container>
  );
}

export default CardPokemon;
