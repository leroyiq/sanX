import styled from 'styled-components';
import { colors } from 'themes/const';

export const DIVHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* gap: 20px; */
  /* margin-top: 20px; */
  padding-bottom: 20px;

  & div {
    display: flex;
    align-items: start;
    justify-content: center;
    /* gap: 10px; */
    flex-direction: column;
    /* margin-top: 20px; */
    /* margin-bottom: 20px; */
    /* color: ${colors.acent}; */

    /* width: 100%; */
    min-height: 100vh;

    background-position: 100%;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 1024px) {
      width: 100%;
    }

    & h2 {
      font-family: 'comfortaa', sans-serif;
      font-size: 35px;
      margin-bottom: 10px;
      align-items: flex-start;
      text-align: start;
      padding-left: 50px;
      max-width: 30%;
    }
    & pre {
      font-family: 'comfortaa', sans-serif;
      font-size: 35px;
      padding-left: 50px;
      max-width: 100vh;
    }
  }
`;
