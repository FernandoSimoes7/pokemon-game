import React, { useEffect } from 'react';
import { Cactus, Container, Dino, Game, GameArea, InfoPerson } from './style';

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
          <Dino></Dino>
          <Cactus></Cactus>
        </Game>

      </GameArea>
    </Container>
  );
}

export default DashBoard;
