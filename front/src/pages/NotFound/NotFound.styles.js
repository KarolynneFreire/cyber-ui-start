import styled, { keyframes } from "styled-components";

const typingAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 10%;
  }
`;

export const Bg = styled.main`
    background-image: var(--secondary-color);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 375px) {
        display: none;
    }

    & main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        max-width: 1280px;
        width: 100%;
        height: 80vh;
    }
`

export const TitleNotFound = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-size: 6rem;
    border-right: 2px solid var(--text-color);
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    font-weight: 400;
    color: var(--text-color);
    animation: ${typingAnimation} 2s steps(4, end), blinkCursor 0.8s step-end infinite;

  @keyframes blinkCursor {
    50% {
      border-color: transparent;
    }
  }
`

export const DescriptionNotFound = styled.p`
    color: var(--text-opactity-color);
`
