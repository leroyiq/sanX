import styled from 'styled-components';
import { colors } from 'themes/const';

export const DIVHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 20px;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${colors.acent};

    @media (min-width: 1024px) {
      width: 100%;
  }

  & img {
    display: block;
    width: 90%;
    box-shadow: 0px 0px 20px 5px rgba(240, 202, 10, 0.18);
  }
`;
