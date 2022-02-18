import React from 'react';
import { Atributes, Container, Div, Icon } from './style';

export interface PokemonProps {
  dataPokemon?: any;
  namePokemon?: string;
}

const CardPokemon: React.FC<PokemonProps> = ({ dataPokemon }) => {
  return (
    <Container>
      <Div>
        <p>{dataPokemon.name}</p>
        <small></small>
      </Div>
      <Icon>
        <img src={dataPokemon.fotos} alt="" />
      </Icon>
      <Div>
        <Atributes>
          <p>Altura</p>
          <p>{dataPokemon.height * 10}cm </p>
        </Atributes>
      </Div>
      <Div>
        <Atributes>
          <p>Peso</p>
          <p>{dataPokemon.weight / 10}Kg</p>
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
