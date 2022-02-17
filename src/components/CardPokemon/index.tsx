import React from 'react';
import { Atributes, Container, Div, Icon } from './style';

const CardPokemon: React.FC = () => {
  return (
    <Container>
      <Div>
        <p></p>
        <small></small>
      </Div>
      <Icon>
        <img src="" alt="" />
      </Icon>
      <Div>
        <Atributes>
          <p>Altura</p>
          <p></p>
        </Atributes>
      </Div>
      <Div>
        <Atributes>
          <p>Vida</p>
          <p></p>
        </Atributes>
      </Div>
    </Container>
  );
};

export default CardPokemon;
