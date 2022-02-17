import React, { useEffect } from 'react';
import { Pokeball, Cloud1, Cloud2, Container, Dino, Game, GameArea, InfoPerson } from './style';

function DashBoard() {
  useEffect(() => {

  }, [])

  return (
    <Container>
      <InfoPerson>
        <img src="" alt="Avatar" />
        <p>NAME POKEMON</p>
      </InfoPerson>
      <GameArea>

        <Game>
          <Dino src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"></Dino>
           <Pokeball />
          <>
            <Cloud1 />
            <Cloud2 />
          </>
        </Game>

      </GameArea>
    </Container>
  );
}

export default DashBoard;
