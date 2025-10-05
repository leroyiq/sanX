import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'themes/const';

const NotFoundDiv = styled.div`
  display: block;
  text-align: center;
  margin: auto 0;
  width: 100%;
  height: 100%;

  & h2 {
    color: ${colors.warning};
    font-size: 36px;
    display: block;
    font-family: monospace;
    background-color: ${colors.fluid};
    height: 300px;
    text-align: center;
    align-content: center;
  }
`;


export const NotFound = () => {
   const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, [navigate]);
 
  return (
    <NotFoundDiv>
      <h2>Запись не найдена</h2>
    </NotFoundDiv>
  );
};
