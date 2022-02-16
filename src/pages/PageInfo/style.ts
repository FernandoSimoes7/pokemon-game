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
  width: 60vw;
  height: 18vh;
  background-color: black;
  opacity: 0.75;
  color: white;

  margin: 0px 0px 12px 0px;
  border-radius: 0px 0px 40px 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardsInfo = styled.h1`
  width: 100%;
  height: 60vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

`;

export const BoxInfo = styled.div`
  width: 25vw;
  height: 60vh;
  background: linear-gradient(#DEDEDE, #FF7070);
  border-radius: 15px;
  padding: 8px 12px;

  cursor: pointer;
  
  margin: 3vh 2vw;
  :first-child {
    margin-rigth: 0vh;
    margin-left: 2vw;
  }
  :nth-last-child(1) {
    margin-left: 0vh;
    margin-rigth: 2vw;
  }
  box-shadow: 5px 5px 5px 1px black
`;

export const Atributes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 16px;
  color: black;
`;

export const Icon = styled.div`
  width: 100%;
  heigth: 65%;
  margin-bottom: 7px;
  padding: 10px;

  background-color: #ECECEC;
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.h3`
  font-size: 28px;
  color: black;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  >small {
    font-size: 16px;
  }
`;