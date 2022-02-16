import styled from 'styled-components';

export const TitleBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: solid var(--navbar-border) 10px;
`;

export const SearchBar = styled.input`
  width: 40vw;
  height: 7vh;
  background-color: white;
  margin-top: 20px;
  padding: 15px;

  border-radius: 25px;
  font-family: 'Holtwood One SC';

  ::placeholder {
    color: #f11a27;
    opacity: 0.6;
  }
`;

export const TitleDiv = styled.div`
  width: 60vw;
  height: 10vh !important;
  background-color: var(--navbar-border);

  margin-bottom: 12px;
  border-radius: 0px 0px 80px 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxCards = styled.div`
  width: 100%;
  gap: 20px;
  padding-bottom: 50px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
