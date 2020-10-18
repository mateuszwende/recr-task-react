import styled, { keyframes } from 'styled-components';

const keyframeSpin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 70px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  border: 7px solid lightblue;
  border-radius: 50%;
  border-top: 7px solid blueviolet;
  width: 70px;
  height: 70px;
  animation: ${keyframeSpin} 1.5s linear infinite;
`;
