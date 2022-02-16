import styled from 'styled-components';

export const TitleBar = styled.div`
  width: 100%;
  height: 20vh;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contente: center;
`;

export const SearchBar = styled.input`
  width: 40vw;
  height: 7vh;
  background-color: white;
  margin: 2px;
  padding: 15px;

  border-radius: 25px;
  ::placeholder {
    color: palevioletred;
  }
`;

export const Title = styled.h1`
  margin: 12px 0;
  color: black;
`;

export const CardsInfo = styled.h1`
  width: 100%;
  height: 65vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

`;

export const BoxInfo = styled.div`
  width: 25vw;
  height: 60vh;
  background-color: blue;
  border-radius: 15px;
  padding: 8px 12px;

  cursor: pointer;
  
  margin: 1vh 2vw;
  :first-child {
    margin-rigth: 0vh;
    margin-left: 2vw;
  }
  :nth-last-child(1) {
    margin-left: 0vh;
    margin-rigth: 2vw;
  }
`;

export const Atributes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 16px;
  color: white;
`;

export const Icon = styled.div`
  font-size: 16px;

  width: 95%;
  heigth: 70%;
  background-color: yellow;
  position: center;
`;

export const Name = styled.h3`
  font-size: 28px;
  color: white;

  justify-content: space-between;
`;