import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ececec;
  width: 30vw;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: solid var(--navbar-border) 10px;
`;

export const DivList = styled.div`
  background-color: #f2f2f2;
  width: 90%;
  height: 70vh;
  margin-top: 5vh;
  padding-left: 15px;

  border-radius: 15px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
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

  background-color: #ed3237;
  border: none;
  border-radius: 25px;
  transition: 0.6s;

  :hover {
    cursor: pointer;
    background-color: #3b5ba7;
  }

  a {
    text-decoration: none;
    color: white;
    font-family: 'Holtwood One SC';
    :hover {
      color: #ffcb05;
    }
  }
`;
