import styled from 'styled-components';
import { colors } from 'themes/const';
import bg from '../img/memCard.png';
export const MemberForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 10px;
  border-radius: 10px;
  max-width: 400px;
  width: 90%;
  /* background-color: ${colors.dark}; */
  padding: 20px 15px;
  background-image: url(${bg});
  background-position: bottom left;
  background-size: cover;
  box-shadow: 0px 0px 20px 5px rgba(240, 202, 10, 0.18);

  & h2 {
    text-align: center;
    font-size: 25px;
    font-family: 'Cormorant Garamond', serif;
    margin: 0;
    color: ${colors.acent};
  }

  & h3 {
    text-align: center;
    font-size: 32px;
    font-family: 'Cormorant Garamond', serif;
    color: ${colors.acent};
    margin: 0;
    display: block;
    padding: 5px 15px;
    background-color: ${colors.lightGray};
  }

  & img {
    display: block;
    width: 150px;
    height: auto;
    object-fit: cover;
    align-self: center;
    /* padding-bottom: 20px; */
  }

  & label {
    display: flex;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: ${colors.primary};
    background-color: ${colors.lightGray};
    /* background-color: ${colors.darkGray}; */
    padding: 10px;

    & input {
      text-align: center;
      color: ${colors.primary};
      font-size: 22px;
      background-color: ${colors.darkGray};
      /* border-radius: 10px; */
      border: none;

      width: 40%;
      padding: 5px 10px;
      font-family: 'Cormorant Garamond', serif;
      &.active {
        color: ${colors.success};
      }
    }
  }
`;

export const MemberDiv = styled.div`
  display: flex;
  width: auto;
  /* margin: 0 auto; */
`;
