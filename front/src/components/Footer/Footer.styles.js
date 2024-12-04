import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FooterContent = styled.section`
  max-width: 1280px;
  width: 100%;
  padding: 5rem 0 2rem 0;

  & hr {
    margin-top: 1rem;
    border-top: 1px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FooterLogo = styled.h3`
  color: var(--text-opacity-color);
  font-family: "Rubik Glitch", system-ui;
  letter-spacing: 0.2rem;
  font-weight: 100;
  font-size: 1.3rem;
`

export const SocialMedia = styled.section`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 1rem;

  & img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const FooterSection = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FooterItem = styled.div`
  flex: 1;
  max-width: 350px;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
  }

  & a {
    color: var(--text-color);
  }
`

export const FooterText = styled.p`
  color: var(--text-opactity-color);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-top: 1rem;
`

export const FooterTitle = styled.h4`
  color: var(--text-color);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`

export const FooterBottom = styled.div`
    max-width: 1280px;
  width: 100%;
  border-top: 1px solid var(--border-color);
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  & p {
    color: var(--text-opactity-color);
    font-size: 0.8rem;
  }

  & div {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

export const FooterLink = styled.a`
  color: var(--text-opactity-color);
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--text-opactity-color);
  }
`

export const Contact = styled.div`
  max-width: 1280px;
  width: 100%;
    display: flex;
    justify-content: space-between;
    
`
