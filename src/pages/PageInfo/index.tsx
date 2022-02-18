import React, { useCallback, useEffect, useState } from 'react';
import { Api } from '../../Api';
import CardPokemon from '../../Components/CardPokemon';
import NavBarTop from '../../Components/NavBarTop';
import { BoxCards, SearchBar, TitleBar, TitleDiv } from './style';

interface PokemonInfo {
  fotos: string;
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
}

interface PropsSearch {
  name: string;
  url: string;
}

const PageInfo: React.FC = () => {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    searchPokemons();
  }, []);

  const searchPokemons = async () => {
    await Api.get(url)
      .then((response: any) => {
        let results = response.data.results;
        if (results) {
          let data = results;
          setPokes(data);
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const urlForSearch = '/pokemon?offset=0&limit=20';
  const [searchPokemon, setSearchPokemon] = useState<PropsSearch[]>([]);

  useEffect(() => {
    newSearchPokemons();
  }, []);

  const newSearchPokemons = async () => {
    await Api.get(urlForSearch)
      .then((response: any) => {
        let results = response.data.results;
        if (results) {
          let data = results;
          setSearchPokemon(data);
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  // ------------------------------------------------------------------------------
  // searchBar criar component

  const url = '/pokemon/';

  let initialPokemon: PokemonInfo = {
    fotos: '',
    id: 0,
    name: '',
    height: 0,
    weight: 0,
    types: [],
  };

  const [pokemon, setPokemon] = useState<PokemonInfo>(initialPokemon);
  const [urlSearch, setUrlSearch] = useState('');

  const submitSearch = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    let dataSearch = e.target.value;
    setUrlSearch(dataSearch);
    console.log(urlSearch, dataSearch);
  };

  useEffect(() => {
    (async () => {
      await Api.get(url + urlSearch)
        .then(({ data }) => {
          console.log(data);
          let currentPokemon: PokemonInfo = {
            fotos: data.sprites.front_default,
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            types: data.types.map((type: any) => type.type.name),
          };
          setPokemon(currentPokemon);
        })
        .catch((err) => {
          // console.error(err);
        });
    })();
  }, [urlSearch]);

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
        <SearchBar
          onChange={submitSearch}
          placeholder="Pesquisar Pokemon"
          type="text"
        />
      </TitleBar>
      <BoxCards>
        <CardPokemon dataPokemon={pokemon}></CardPokemon>
      </BoxCards>
    </>
  );
};

export default PageInfo;
