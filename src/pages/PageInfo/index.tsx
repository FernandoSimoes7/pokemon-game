import React, { useEffect, useState } from 'react';
import CardPokemon from '../../components/CardPokemon';
import NavBarTop from '../../components/NavBarTop';
import { Api } from '../../services/api';
import { BoxCards, SearchBar, TitleDiv, TitleBar } from './style';

function PageInfo() {
  const url = '/pokemon?offset=0&limit=10';
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      searchPokemons();
    })();
  }, []);

  const searchPokemons = async () => {
    await Api.get(url)
      .then((response: any) => {
        let results = response.data.results;
        if (results) {
          let data = results;
          setPokemon(data);
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <>
      <NavBarTop />
      <TitleBar>
        <TitleDiv>
          <a href="/">
            <img
              src="https://fontmeme.com/permalink/220216/dfa82dbc91316d8db28f5e9df5eba887.png"
              alt="title-infos"
            />
          </a>
        </TitleDiv>
        <SearchBar placeholder="Pesquisar Pokemon"></SearchBar>
      </TitleBar>
      <BoxCards>
        {pokemon?.map((data: any, idx: number) => {
          return <CardPokemon key={idx} />;
        })}
      </BoxCards>
    </>
  );
}

export default PageInfo;
