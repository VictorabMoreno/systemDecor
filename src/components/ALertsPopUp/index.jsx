import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const CardContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 0;
  width: 350px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  height: auto;
  font-family:poppins;
  border-bottom-width:0 ;
  border-right-width:0 ;
`;

const CardContent = styled.div`
  padding: 5px 15px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.color};
  margin: 5px 0;
  font-weight: 600;
  
`;

const Text = styled.p`
  font-size: 13px;
  margin: 0 0 5px;
  letter-spacing: 0.5px;
`;

const ProgressBarContainer = styled.div`
  height: 5px;
  background-color: #ccc;
`;

const Progress = styled.div`
  height: 100%;
  width: ${props => props.progress}%;
  background-color: ${props => props.color};
  transition: width 0.3s ease-in-out;
`;

const ProgressBar = ({ progress, color }) => {
  return (
    <ProgressBarContainer>
      <Progress progress={progress} color={color} />
    </ProgressBarContainer>
  );
};

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const CardAnimation = styled.div`
  animation: ${slideIn} 0.3s ease;
`;

const PopupCard = ({ type, title, text, duration }) => {
  const [progress, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => prevProgress + (100 / duration));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setShowPopup(false);
      }, 500); // Tempo em milissegundos antes de ocultar o popup (0,5 segundos neste exemplo)
    }
  }, [progress, duration]);

  const getProgressBarColor = () => {
    if (type === 'success') {
      return 'green';
    } else if (type === 'warn') {
      return 'yellow';
    } else if (type === 'alert') {
      return 'red';
    } else {
      return 'gray';
    }
  };

  if (!showPopup) {
    return null;
  }

  return (
    <CardContainer>
      <CardContent>
        <Title color={getProgressBarColor()}>{title}</Title>
        <Text>{text}</Text>
      </CardContent>
      <ProgressBar progress={progress} color={getProgressBarColor()} />
    </CardContainer>
  );
};

export default PopupCard;

