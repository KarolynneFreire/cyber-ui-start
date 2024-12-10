import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--bg-profile);

    @media (max-width: 960px) {
        height: auto;
    }
`;

export const MainContainer = styled.div`
    padding: 0 0 0 4vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1440px) {
        padding: 100px 20px 0 100px;
    }

    @media (max-width: 620px) {
        padding: 0 0px 0 80px;
    }

    @media (max-width: 374px) {
        display: none;
    }
`;

export const UserProfileContent = styled.div`
    padding: 5vh;
    max-width: 1400px;
    background-color: #f5f5f5;
    background-color: var(--primary-color);
    width: 100%;
    color: var(--text-color);

    @media (max-width: 1440px) {}

    @media (max-width: 768px) {
        padding: 2vh;
    }

    @media (max-width: 374px) {
        display: none;
    }
`;

export const Profile = styled.div`
    display: flex;
    font-family: "Luckiest Guy", cursive;
    font-weight: 400;
    gap: 5rem;
    color: var(--text-color);

    @media (max-width: 1024px) {
        gap: 2rem;
    }

    @media (max-width: 768px) {
        gap: 1.5rem;
    }
`;

export const UserImage = styled.div`
    max-width: 150px;
    width: 100%;
    height: 150px;

    @media (max-width: 920px) {
        display: none;
    }
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;

    @media (max-width: 920px) {
        display: none;
    }
`;

export const Line = styled.div`
    width: 100%;
    border-top: 1px solid #d9d9d9;
    margin-top: 2rem;

    @media (max-width: 768px) {
        margin-top: 2rem;
    }
`;

export const About = styled.div`
    max-width: 800px;
`;

export const Span = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: #000;

    @media (max-width: 768px) {
        gap: 0.1rem;
    }
`;

export const NameProfile = styled.h1`
    color: var(--text-color);
    font-family: "Luckiest Guy", cursive;
    font-weight: 400;
    letter-spacing: 0.1rem;
`;

export const Icon = styled.i`
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const Info = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const Notifications = styled.div`
    & i {
        font-size: 2rem;
    }
`;

export const Bio = styled.div`
    font-family: 'Poppins', sans-serif;
    padding: 1rem;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`;

export const Location = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    gap: 0.2rem;

    @media (max-width: 768px) {
        gap: 0.1rem;
    }
`;

export const Edit = styled.i`
    border: solid 1px #d9d9d9;
    border-radius: 50%;
    font-size: 1.5rem;
    width: 4rem;
    height: 2.4rem;
    cursor: pointer;
    transition: transform 0.4s ease, opacity 0.4s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(360deg)' : 'rotate(0deg)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0.5')};

    @media (max-width: 1080px) {
        display: none;
    };

    @media (max-width: 768px) {
        font-size: 1.2rem;
        width: 3rem;
        height: 2rem;
    };
`;

export const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    height: 2rem;
    padding-left: 0.3rem;

    @media (max-width: 768px) {
        height: 1.8rem;
        padding-left: 0.2rem;
    }
`;

export const MainContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5vh 0 0 4vw;

    @media (max-width: 1440px) {
        padding: 100px 20px 0 100px;
    }

    @media (max-width: 620px) {
        padding: 0px 0px 0 80px;
    }
`;

export const UserProfileContainer = styled.div`
    font-family: 'Poppins', sans-serif;
    padding: 5vh;
    max-width: 1400px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 30px;
    background-color: var(--primary-color);
    width: 100%;

    @media (max-width: 620px) {
        margin-bottom: 0;
    }

    @media (max-width: 374px) {
        display: none;
    }
`;

export const FindOutMore = styled.h2`
    color: #828181;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;


export const GroupSquare = styled.div`
  display: flex;
  overflow-x: auto;  /* Permite rolar horizontalmente */
  gap: 4rem;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 1rem;
  white-space: nowrap;
  scroll-behavior: smooth;
  position: relative;

  /* Remover a barra de rolagem padrão */
  ::-webkit-scrollbar {
    height: 6px; /* A altura da barra de rolagem */
  }

  ::-webkit-scrollbar-track {
    background: transparent; /* Deixa a trilha invisível */
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2); /* Cor da "manopla" do scrollbar */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5); /* Cor da manopla quando o mouse passa por cima */
  }

  /* Faz a scrollbar desaparecer em dispositivos móveis */
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  /* Customizando um efeito visual no hover para indicar interação */
  &:hover {
    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.4); /* Cor da manopla quando o container é hoverizado */
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 960px) {
    gap: 2rem;
  }

  @media (max-width: 620px) {
    gap: 1rem;
  }
`;





export const Square = styled.div`
    max-width: 250px;
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    background-color: var(--bg-profile);
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 0 2rem;
    flex-shrink: 0;

    &:hover {
        transform: scale(1.04);
    }

    @media (max-width: 1500px) {
        max-width: 200px;
        height: 200px;
    }
`;

export const Graphics = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const IconElements = styled.i`
    font-size: 5rem;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 4rem;
    }
`;

export const P = styled.p`
    font-size: 0.6rem;
    color: #ffffff;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

export const Next = styled.i`
    font-size: 2rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

