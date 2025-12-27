import styled from 'styled-components';
import { colors } from 'themes/const';
import homeBg from '../img/vecteezy_investment-loan-approval-concepts-build-residential-homes_26398793.jpg';

export const DIVHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;

  padding-bottom: 20px;

  & section {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    width: 100%;
    height: 600px;
    background-image: url('${homeBg}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 16px;
      padding: 10px;
      text-align: center;
      width: 40%;
      height: 100%;

      & h2 {
        color: ${colors.acent};

        display: flex;
        background-color: ${colors.darker};

        line-height: 1.5;
        padding: 10px;
        border-radius: 10px;
      }

      & p {
        line-height: 1.5;
        font-size: inherit;
      }

      @media (min-width: 320px) and (max-width: 480px) {
        width: 50%;
        font-size: 10px;
        height: 80%;
      }

      @media (max-width: 768px) and (min-width: 1024px) {
        width: 50%;
        flex-direction: column;
        font-size: 16px;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
