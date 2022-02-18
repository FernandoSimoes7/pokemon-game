import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../Api';
import { Button, Container, DivList, Item, List } from './style';

const SideBar: React.FC = () => {
  const url = '/pokemon?offset=0&limit=50';
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
      <DivList>
        <List>
          {pokemon?.map((data: any, idx: number) => {
            return (
              <Item to={'/' + data.name} key={idx}>
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
};

export default SideBar;
