import React from 'react';
import { FaTools } from 'react-icons/fa';

import styled, { keyframes } from 'styled-components';

// Animação de rotação do ícone
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ConstructionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    font-size: 72px;
    animation: ${rotateAnimation} 2s linear infinite;
  }
`;

const Message = styled.p`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  font-family: poppins;
`;

const EmConstrucao = () => {
  return (
    <ConstructionContainer>
      <IconWrapper>
        <FaTools />
      </IconWrapper>
      <Message>Esta página está em construção. Volte em breve!</Message>
    </ConstructionContainer>
  );
};

export default EmConstrucao;
