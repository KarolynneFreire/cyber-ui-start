import styled, { keyframes } from 'styled-components';

const revealVertical = keyframes`
0%, 100% {
    opacity: 1;
    clip-path: inset(0 0 0 0);
    }
    10% {
    opacity: 0.8;
    clip-path: inset(10% 0 20% 0);
    }
    20% {
    opacity: 0.6;
    transform: scaleX(1.02);
    }
    30% {
    opacity: 0.9;
    transform: scaleX(0.98);
    }
    50% {
    opacity: 0.4;
    }
    70% {
    opacity: 1;
    clip-path: inset(0 0 0 0);
    transform: scaleX(1);
    }
`

export const LoadingInitial = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10000;
`

export const Logo = styled.h1`
    font-size: 1.8rem;
    font-family: "Rubik Glitch", system-ui;
    font-weight: 400;
    letter-spacing: .5rem;
    text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
    color: white;
    animation: ${revealVertical} 3s ease forwards;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  padding: 2rem;
  max-width: 500px;
  min-height: 550px;
  width: 100%;
  margin: 0 auto;
  background: var(--form-color);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  border: solid 1px;
  border-image-source: var(--third-reverse-color);
  border-image-slice: 1;
`
