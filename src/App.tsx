import React from 'react';
import Router from './Router';
import Templates from '../src/Template/globalStyled';
import GlobalFonts from '../src/Fonts/fonts';

const App: React.FC = () => {
  return (
    <>
      <GlobalFonts />
      <Router />
      <Templates />
    </>
  );
};

export default App;
