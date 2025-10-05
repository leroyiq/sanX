import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'themes/const';

export const DIVLOGO = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  /* width: 115px; */
  border-color: transparent;
  padding: 15px;

  & img {
    margin-right: 20px;
    width: 40px;
    border-right: 1px solid ${colors.acent};
    padding-right: 15px;
  }
  & span {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0px;
    color: ${colors.primary};
    text-shadow: #2e2e2e 0 4px 5px;

    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    text-transform: none;
    transition: all 0.6s ease;

    @media (min-width: 1024px) {
      font-size: 30px;
    }

    &:hover {
      color: ${colors.acent};
    }
  }
`;

export const UL = styled.ul`
  display: none;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  color: ${colors.primary};
  list-style: none;
  gap: 30px;
  border-bottom: 1px solid ${colors.lightGray};
  border-top: 1px solid ${colors.lightGray};
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const DivMob = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: hidden;
  position: fixed;
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  align-items: end;
  justify-content: start;
  top: 0;
  right: 0;
  background-color: ${colors.darkGray};
  gap: 50px;
  /* transition: all 0.6s ease; */

  z-index: 1000;

  & .closeMob {
    width: 20px;
    height: 20px;
  }
`;

export const UlMob = styled.ul`
  color: ${colors.primary};
  list-style: none;
  gap: 30px;
  /* border-bottom: 1px solid ${colors.lightGray}; */
  /* border-top: 1px solid ${colors.lightGray}; */
  /* padding-top: 80px; */
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;

  /* height: 100vh; */
`;

export const BtnMenu = styled.button`
  position: relative;
  padding: 10px 20px;
  border: none;
  background-color: ${colors.fluid};
  cursor: pointer;

  font-size: 22px;
  font-family: 'Comfortaa', sans-serif;
  color: ${colors.primary};
  transition: all 0.6s ease;

  @media (min-width: 1024px) {
    display: none;
  }

  &:hover {
    background-color: ${colors.lightGray};
    color: ${colors.acent};
    scale: 1.005;
  }

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 3px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }
  &::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: ${colors.acent};
    border-right-color: ${colors.acent};
  }
  &::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: ${colors.acent};
    border-left-color: ${colors.acent};
  }
  &:hover:after,
  &:hover:before {
    width: 100%;
    height: 100%;
  }
`;

export const NAV = styled.nav`
  display: flex;

  width: 100%;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: 'Comfortaa', sans-serif;
  font-optical-sizing: auto;
  border-color: transparent;
  color: ${colors.primary};

  @media (min-width: 1024px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const BTN = styled.button`
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: ${colors.fluid};
  cursor: pointer;

  font-size: 16px;
  font-family: 'Comfortaa', sans-serif;
  margin: 0 20px;
  color: ${colors.primary};
  transition: all 0.6s ease;

  &:hover {
    background-color: ${colors.lightGray};
    color: ${colors.acent};
    scale: 1.005;
  }

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 3px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }
  &::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: ${colors.acent};
    border-right-color: ${colors.acent};
  }
  &::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: ${colors.acent};
    border-left-color: ${colors.acent};
  }
  &:hover:after,
  &:hover:before {
    width: 100%;
    height: 100%;
  }
`;
export const BtnClose = styled.button`
  position: relative;
  padding: 10px;
  border: none;
  background-color: ${colors.fluid};
  cursor: pointer;
  top: 20px;
  right: 20px;
  font-size: 16px;
  font-family: 'Comfortaa', sans-serif;
  color: ${colors.primary};
  transition: all 0.6s ease;

  &:hover {
    background-color: ${colors.lightGray};
    color: ${colors.acent};
    scale: 1.005;
  }

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 3px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }
  &::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: ${colors.acent};
    border-right-color: ${colors.acent};
  }
  &::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: ${colors.acent};
    border-left-color: ${colors.acent};
  }
  &:hover:after,
  &:hover:before {
    width: 100%;
    height: 100%;
  }
`;

export const DIVNAV = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 20px 0;
    width: 100%;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${colors.primary};
  padding: 1em 1.5em;
  font-size: 18px;
  transition: all 0.5s ease;
  margin-left: 1.5em;

  &.active {
    color: ${colors.acent};
    border-bottom: 2px solid ${colors.acent};
  }

  &:hover {
    color: ${colors.acent};
    border-bottom: 2px solid ${colors.primary};
    scale: 1.005;
  }
`;
