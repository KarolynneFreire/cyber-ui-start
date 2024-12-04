import styled from "styled-components";

export const Section = styled.section`
    background-color: var(--bg-color);
    width: 100%;
    /* height: auto; */
    display: flex;
    justify-content: center;

`

export const SectionContent = styled.div`
    max-width: 1280px;
    width: 100%;
    /* border: red solid 1px; */
    display: flex;
    align-items: center;
    margin-top: 110px;
    gap: 30px;
`

export const ImgContainer = styled.div`
    width: 600px;

    & img {
        width: 100%;
    }
`

export const AboutUs = styled.div`
    
`

export const Title = styled.h2`
    font-weight: 400;
    font-size: 2rem;
    color: var(--text-color);
    margin-bottom: .5rem;
`

export const Description = styled.p`
    color: var(--text-opactity-color);
    font-size: 1.2rem;
    margin-bottom: 1rem;
`
