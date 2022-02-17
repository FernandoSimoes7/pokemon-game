import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, DivList, Item, List } from './style';

const SideBar: React.FC = () => {
  return (
    <Container>
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
