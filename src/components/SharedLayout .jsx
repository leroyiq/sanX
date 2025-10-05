import { Navigation } from 'components';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SharedDiv } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <SharedDiv>
        <Navigation />
        <Outlet />
      </SharedDiv>
    </>
  );
};
