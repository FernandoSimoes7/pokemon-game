import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, DivList, List, Title } from './style';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Title>Pokémons</Title>
      <DivList>
        <List></List>
      </DivList>
      <Button>
        <Link to="/info">Informações +</Link>
      </Button>
    </Container>
  );
};

export default SideBar;
