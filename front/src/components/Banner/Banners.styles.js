import styled from "styled-components";

export const BannerContent = styled.section`
    max-width: 950px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background-image: var(--third-color);
    position: absolute;
    top: 75%;
    color: var(--text-color);
    font-size: .8rem;
    border-radius: 6px;
    
    & img {
        width: 80px;
        margin-bottom: 10px;
        transition: transform 0.3s ease-in-out;

        &:hover {
        transform: scale(1.1);
    }
    }
`

export const Item = styled.div`
    border-right: var(--text-color) solid 1px;
    padding: 0 35px;
    max-width: 260px;
    text-align: center;
    width: 100%;

    &:last-child {
        border: none;
    }


`

export const BannerContentTeam = styled.section`
    max-width: 750px;
    width: 100%;
    margin: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    gap: 40px;
    background-image: var(--third-color);
    color: var(--text-color);
    font-size: .8rem;
    border-radius: 6px;
    
    & img {
        width: 120px;
        margin-bottom: 10px;
        transition: transform 0.3s ease-in-out;

        &:hover {
        transform: scale(1.1);
    }
    }
`

export const Legend = styled.p`
    color: var(--fiveth-color);
    font-size: 1rem;
    font-weight: 600;
    
@media (max-width: 768px) {
    font-size: 0.875rem; 
}
`

export const Team = styled.div`
    display: flex;
    flex-direction: column;

    & p {
        color: var(--text-color);
        font-size: .8rem;
        font-weight: 600;
    }

    & h3 {
        font-size: 2rem;
        margin-bottom: 10px;
    }
`
