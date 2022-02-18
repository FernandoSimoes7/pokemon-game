import React from 'react';
import { Atributes, Container, Div, Icon } from './style';

export interface PokemonInfo {
  dataPokemon: any;
}

const CardPokemon: React.FC<PokemonInfo> = ({ dataPokemon }) => {
  return (
    <Container>
      <Div>
        <p>{dataPokemon.name}</p>
        <small></small>
      </Div>
      <Icon>
        <img src={dataPokemon.sprites} alt="" />
      </Icon>
      <Div>
        <Atributes>
          <p>Altura</p>
          <p>{dataPokemon.height}</p>
        </Atributes>
      </Div>
      <Div>
        <Atributes>
          <p>Peso</p>
          <p>{dataPokemon.weight}</p>
        </Atributes>
      </Div>
      <Div>
        <Atributes>
          <p>Tipo</p>
          <p>{dataPokemon.types}</p>
        </Atributes>
      </Div>
    </Container>
  );
};

export default CardPokemon;
