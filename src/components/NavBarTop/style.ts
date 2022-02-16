import styled from 'styled-components';
import img from '../../assets/pokebolas.jpg';

export const Container = styled.div`
  background-size: contain;
  background-image: url(${img});
  opacity: 0.75;

  border: none;
  width: 100%;
  height: 10vh;

  display: flex;
  align-items: center;
`;

export const DivLogo = styled.div`
  width: 250px;

  display: flex;
  justify-content: space-around;

  >img{
    opacity: 1 !important;
  }
`;
