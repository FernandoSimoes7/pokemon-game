import styled, { keyframes } from 'styled-components';
//https://www.youtube.com/watch?v=sbz13HBSgxY       AUDIO GAME OVER
import Img from "../../assets/cloud.png"

import Img2 from "../../assets/pokeball.png"


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

const CloudKF = keyframes` 
  0% {
    left: 600px;
  }

  100% {
    left: -220px;
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
overflow: hidden;
  width: 600px;
  height: 200px;
  border-bottom: 1px solid black;
  margin: auto;
`;

export const Dino = styled.img`
  width: 50px;
  height: 50px; 
  background-size: 50px 50px;
  position: relative;
  top: 150px;
`;

export const Pokeball = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  top: 98px;
  left: 580px;

  background: url(${Img2});
  background-size: 50px 50px;

  animation: ${BlockKF} 2s infinite linear;
`;

export const Jump = styled.div`
animation: ${JumpKF} 0.3s linear;
`;

export const Cloud1 = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  background: url(${Img});
  background-size: 100px 100px;
  position: relative;
  top: -100px;
  object-fit: unset;
  animation: ${CloudKF} 8s linear infinite;
`;

export const Cloud2 = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  background: url(${Img});
  background-size: 80px 80px;
  position: relative;
  top: -80px;
  object-fit: unset;
  animation: ${CloudKF} 6s linear infinite;
`;