import React from 'react';
import { BtnClose, DivMob, NavLinkStyled, UlMob } from './Navigation.styled';
import { GrClose } from 'react-icons/gr';

export const MobMenu = ({ close }) => {
  return (
    <DivMob>
      <BtnClose onClick={close}>
        <GrClose className="closeMob" />
      </BtnClose>

      <UlMob>
        <NavLinkStyled
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
          onClick={close}
        >
          Домашня
        </NavLinkStyled>

        <NavLinkStyled
          to="/membership"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
          onClick={close}
        >
          Члени ГФНУ
        </NavLinkStyled>
        <NavLinkStyled
          to="/contacts"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
          onClick={close}
        >
          Контакти
        </NavLinkStyled>
        <NavLinkStyled
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
          onClick={close}
        >
          Про Нас
        </NavLinkStyled>
      </UlMob>
    </DivMob>
  );
};
