import React from 'react';
import { Container, GameArea, InfoPerson } from './style';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <InfoPerson>
        <img src="" alt="Avatar" />
        <p>Name Pokemon</p>
      </InfoPerson>
      <GameArea>Game</GameArea>
    </Container>
  );
};

export default DashBoard;
