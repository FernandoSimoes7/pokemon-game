import React from 'react';
import Router from './Router';
import Templates from './Templates/globalStyled'
import GlobalFonts from './Fonts/fonts'

function App() {
  return(
    <>
      <GlobalFonts />
      <Router />
      <Templates />
    </>
  )
}

export default App;
