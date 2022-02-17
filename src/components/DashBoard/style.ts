import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #ececec;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid var(--navbar-border) 10px;

  > p {
    font-size: 60px;
    font-weight: none;
  }
`;

export const InfoPerson = styled.div`
  width: 45%;
  heigth: 30%;
  background-color: transparent;
  margin: 3%;
  color: black;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const GameArea = styled.div`
  width: 90%;
  height: 80%;
  background-color: #f2f2f2;
  border: solid white 2px;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
`;
