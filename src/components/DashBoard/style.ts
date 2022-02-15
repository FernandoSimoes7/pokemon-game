import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #ECECEC;

  display: flex;
  flex-direction: column;
  align-items: center;

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
  background-color: transparent;
  border: solid black 2px;
  padding: 10px;
  border-radius: 25px; 
  
  display: flex;
  justify-content: center;
`;
