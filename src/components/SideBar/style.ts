import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ff7070;
  width: 25vw;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: solid var(--navbar-border) 10px;
`;

export const Title = styled.h1`
  margin-top: 8px;
  font-size: 52px;
`;

export const DivList = styled.div`
  background-color: transparent;
  width: 85%;
  height: 55vh;

  border-radius: 10px;
`;

export const List = styled.ul`
  list-style-type: none;

  display: flex;
  max-height: 100%;
  flex-direction: column;
  overflow-y: scroll;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  color: black;
  font-family: 'Holtwood One SC';
  padding-bottom: 15px;

  font-size: 20px;
  transition: 0.2s;

  :hover {
    color: #f11a27;
    cursor: pointer;
    font-size: 25px;
  }

  :first-child {
    padding-top: 10px;
  }
  :nth-last-child(1) {
    padding-bottom: 0px;
  }
`;

export const Button = styled.button`
  margin: 25px 0;
  padding: 2px 15px;
  font-size: 20px;

  background-color: red;
  border: none;
  border-radius: 10px;
  transition: 0.6s;

  :hover {
    cursor: pointer;
    background-color: yellow;
  }

  a {
    text-decoration: none;
    color: white;
    :hover {
      color: black;
    }
  }
`;
