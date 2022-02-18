import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../Api";
import CardPokemon from "../../components/CardPokemon";
import NavBarTop from "../../components/NavBarTop";
import { BoxCards, SearchBar, TitleBar, TitleDiv } from "./style";

interface pokemonDetailsProps {
  id: string;
}

interface PokemonInfo {
  sprites: string;
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
}

const PageInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = "/pokemon/";

  const initialPokemon: PokemonInfo = {
    sprites: "",
    id: 0,
    name: "",
    height: 0,
    weight: 0,
    types: [],
  };

  const [pokemon, setPokemon] = useState<PokemonInfo>(initialPokemon);

  useEffect(() => {
    (async () => {
      await Api.get(url + id)
        .then(({ data }) => {
          console.log(data);
          const currentPokemon: PokemonInfo = {
            sprites: data.sprites.front_default,
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            types: data.types.map((type: any) => type.type.name),
          };
          setPokemon(currentPokemon);
        })
        .catch((err) => {
          console.error(err);
        });
    })();
  }, [id]);

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
        <CardPokemon dataPokemon={pokemon}></CardPokemon>
      </BoxCards>
    </>
  );
};

export default PageInfo;
