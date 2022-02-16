import React, { useEffect, useState } from 'react';
import { Api } from '../../services/api';
import { Link } from 'react-router-dom';
import { Button, Container, DivList, Item, List, Title } from './style';

function SideBar() {
  const url = '/pokemon?offset=0&limit=20';
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
    <Container>
      <Title>Pokémons</Title>
      <DivList>
        <List>
          {pokemon?.map((data: any, idx: number) => {
            return (
              <Item key={idx}>
                {idx + 1} {data.name}
              </Item>
            );
          })}
        </List>
      </DivList>
      <Button>
        <Link to="/info">Informações +</Link>
      </Button>
    </Container>
  );
}

export default SideBar;
