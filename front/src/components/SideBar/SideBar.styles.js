import styled from "styled-components";

export const SideBarMenu = styled.div`
    padding-top: 90px;
    height: 100%;
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--bg-sidebar);
    position: fixed;
    z-index: 1;

    @media (max-width: 374px) {
        display: none;
    }
`

export const LogOut = styled.div`

`

export const Option = styled.div`
    display: flex;
    flex-direction: column;

`

export const I = styled.i`
    font-size: 2rem;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: ${(props) => (props.isClicked ? '5px solid #3F46C8' : '2px solid transparent')};

    &:hover {
        cursor: pointer;
        background-color: #F3E7DE;
        transition: .2s all linear;
    }

`
