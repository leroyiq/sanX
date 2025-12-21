import styled from 'styled-components';
import bgnImage from '../img/bgmain.jpg';
// import { colors } from 'themes/const';

export const SharedDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  

  background-image: linear-gradient(#0a0a0a73, #0a0a0a73), url(${bgnImage});
  background-attachment: fixed;

  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
