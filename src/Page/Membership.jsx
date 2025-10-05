import React from 'react';
import { MemberDiv } from './Membership.styled';
// import { NavLink, Outlet } from 'react-router-dom';

export const Membership = () => {
  return (
    <>
      <MemberDiv>
        <span>
          Задля нерозповсюдження зайвої інформації членство ріелтора у ГФНУ
          надійно перевіряється тільки шляхом сканування QR коду з його
          свідоцтва чи посвідчення члена ГФНУ.
          <br /> Існують три види свідоцтва члена ГФНУ :<br />
          <span className="ident">
            - Kолективний член. Агенція нерухомості в якій працюють не менше двох
            співробітників які є членами ГФНУ.
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
