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
  width: 23vw;

  display: flex;
  justify-content: center;

  > a {
    > img {
      padding-top: 2vh;
      height: 10vh;
    }
  }
`;
