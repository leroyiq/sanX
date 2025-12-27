import styled from 'styled-components';
import { colors } from 'themes/const';

export const MemberDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  /* padding-top: 20px; */
  padding-bottom: 20px;
  margin: 0 auto;
  font-size: 16px;
  gap: 20px;

  & img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: 50% 60%;
  }

  & .payLink {
    color: ${colors.acent};
    cursor: pointer;
    text-decoration: underline;
  }
  & a {
    text-decoration: none;
    color: ${colors.primary};
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;

    &.active {
      border-bottom: 2px solid ${colors.acent};
    }
  }

  & ul {
    width: 90%;
    list-style-type: circle;
    margin-left: 20px;
  }

  & li {
    margin-bottom: 10px;
    font-family: 'Unbounded', sans-serif;
    line-height: 1.5;

    &.contactsItem {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 20px;
      cursor: pointer;
    }
    & .contactIcon {
      width: 30px;
      height: 30px;

      fill: ${colors.acent};
    }
    & details[open] summary {
      color: ${colors.warning};
    }
    & summary {
      display: block;
    }
    & summary::-webkit-details-marker {
      display: none;
    }
    & .sp {
      color: ${colors.info};
      padding-left: 20px;
      font-size: 14px;
    }
  }

  & span {
    /* text-align: center; */

    font-family: 'Unbounded', sans-serif;
    /* margin-left: 10px; */
    margin-right: 10px;
    line-height: 1.5;
    padding: 0 20px;
    text-indent: 20px;

    /* & ident {
      text-indent: 20px;
    } */
  }

  & p {
    width: 90%;
    /* text-align: justify; */
    font-size: 14px;
    font-family: 'Unbounded', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 10px;
    line-height: 1.5;
    text-indent: 20px;
  }
`;
