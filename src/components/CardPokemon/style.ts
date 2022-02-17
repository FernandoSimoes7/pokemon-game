import styled from 'styled-components';

export const Container = styled.div`
  width: 20vw;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10vh;

  background: linear-gradient(#ececec, #f2f2f2, #f11a27);
  border-radius: 15px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
`;

export const Atributes = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  font-size: 16px;
  color: black;

  > p {
    font-family: 'Holtwood One SC';
  }
`;

export const Icon = styled.div`
  width: 70%;
  height: 65%;
  margin-bottom: 7px;
  padding: 10px;

  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 25px;
  color: black;

  > p {
    font-family: 'Holtwood One SC';
  }

  > small {
    font-size: 25px;
  }
`;
