import { createGlobalStyle } from 'styled-components';
import Pokemon2 from '../Fonts/PokemonSolid2.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${Pokemon2}) format('woff2');
        font-weight: 600;
        font-style: normal;
    }
`;