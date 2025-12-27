import React from 'react';
import { MemberDiv } from './Membership.styled';
// import { NavLink, Outlet } from 'react-router-dom';
import memberBg from '../img/memberBg.jpg';

export const Membership = () => {
  return (
    <>
      <MemberDiv>
        <img src={memberBg} alt="w" />
        <span>
          Задля нерозповсюдження зайвої інформації членство ріелтора у САНХ
          надійно перевіряється тільки шляхом сканування QR коду з його
          свідоцтва чи посвідчення члена САНХ.
          <br /> Існують три види свідоцтва члена САНХ :<br />
          <span className="ident">
            - Kолективний член. Агенція нерухомості в якій працюють не менше
            двох співробітників які є членами САНХ.
          </span>
          <br />
          <span className="ident">
            - Ріелтор, співробітник Агенції нерухомості.
          </span>
          <br />
          <span className="ident">- Ріелтор який працює індивідуально.</span>
          <br />
          <span className="ident">Ми торгуємо не обличчям, а нерухомістю!</span>
        </span>
      </MemberDiv>
    </>
  );
};
