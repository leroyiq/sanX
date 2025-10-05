import React, { useState } from 'react';
import logo from '../img/logo.png';

import {
  BTN,
  BtnMenu,
  DIVLOGO,
  DIVNAV,
  NAV,
  NavLinkStyled,
  UL,
} from './Navigation.styled';
import { MobMenu } from './MobMenu';
import { VscMenu } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const [mob, setMob] = useState(false);
  const toggleMobMenu = () => setMob(!mob);

  const navigate = useNavigate();
  const joy = () => navigate('introduction');
  const backHome = () => navigate('/');

  return (
    <NAV>
      <DIVNAV>
        <DIVLOGO onClick={backHome}>
          <img src={logo} alt="Logo" />
          <span>ГІЛЬДІЯ ФАХІВЦІВ З НЕРУХОМОСТІ УКРАЇНИ</span>
        </DIVLOGO>
        <BTN onClick={joy}>Вступ до ГФНУ</BTN>
        <BtnMenu className="menu" onClick={toggleMobMenu}>
          <VscMenu />
        </BtnMenu>
        {mob && <MobMenu close={toggleMobMenu} />}
      </DIVNAV>
      <UL>
        <NavLinkStyled
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Домашня
        </NavLinkStyled>

        <NavLinkStyled
          to="/membership"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Члени ГФНУ
        </NavLinkStyled>
        <NavLinkStyled
          to="/contacts"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Контакти
        </NavLinkStyled>
        <NavLinkStyled
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Про Нас
        </NavLinkStyled>
      </UL>
    </NAV>
  );
};
