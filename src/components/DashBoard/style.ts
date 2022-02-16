import styled, { keyframes } from 'styled-components';

const JumpKF = keyframes`
  0% {
    top: 150px;
  }

  30% {
    top: 130px;
  }

  50% {
    top: 80px;
  }

  80% {
    top: 130px;
  }

  100% {
    top: 150px;
  }
`;

const BlockKF = keyframes` 
  0% {
    left: 580px;
  }

  100% {
    left: -20px;
  }
`;

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

export const Game = styled.div`
  width: 600px;
  height: 200px;
  border-bottom: 1px solid black;
  margin: auto;
`;

export const Dino = styled.div`
  width: 50px;
  height: 50px;
  background-color: yellow;
  background-size: 50px 50px;
  position: relative;
  top: 150px;
`;

export const Cactus = styled.div`
  width: 20px;
  height: 40px;
  position: relative;
  top: 110px;
  left: 580px;

  background-color: green;
  background-size: 20px 40px;

  animation: ${BlockKF} 1s infinite linear;
`;

export const Jump = styled.div`
  animation: ${JumpKF} 0.3s linear;
`;

