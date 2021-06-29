import { createGlobalStyle } from "styled-components";
import BalooFontWoff from "./fonts/AnyConv.com__Baloo2-Regular.woff";
import BalooFontWoff2 from "./fonts/AnyConv.com__Baloo2-Regular.woff2";
import OpenSansWoff from "./fonts/OpenSans-Regular.woff";
import OpenSansWoff2 from "./fonts/OpenSans-Regular.woff2";

export const Global = createGlobalStyle`
  @font-face {
    font-family: 'Baloo2';
    src: local('Baloo2'), local('Baloo2'),
    url(${BalooFontWoff2}) format('woff2'),
    url(${BalooFontWoff}) format('woff');
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'), local('OpenSans'),
    url(${OpenSansWoff2}) format('woff2'),
    url(${OpenSansWoff}) format('woff');
    font-style: normal;
  }

  body{
    padding:0px;
    margin:0px;
  }
`;
