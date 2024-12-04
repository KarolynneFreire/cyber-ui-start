import styled from 'styled-components';

export const Form = styled.form`
  background: var(--form-color);
  font-family: 'Poppins', sans-serif;
  border-radius: 4px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  font-family: "Sen", sans-serif;
  border: solid 1px;
  border-image-source: var(--third-reverse-color);
  border-image-slice: 1;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: var(--text-color);
  }

  input {
    width: 100%;
    padding: 1.2rem 3.5rem 1.2rem 1.2rem ;
    margin-bottom: 1.5rem;
    border-radius: 4px;
    border: 2px solid transparent;
    background-color: var(--input-color);
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: border-image .4s ease-in-out;

    
        &:focus {
        border-image: var(--third-color);
        border-image-slice: 1;
        }

    }

  div {
    margin-bottom: 1.5rem;
  }
`

export const Btn = styled.button`
  display: block;
  height: 50px;
  width: 100%;
  max-width: 200px;
  margin: 1.5rem auto;
  padding: 0.75rem;
  background-image: var(--third-color);
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: red;
  }
`

export const IconVisible = styled.i`
  /* border: red solid; */
  font-size: 30px;
  color: var(--iconVisible-color);
  margin-right: 10px;
  margin-bottom: 50%;
  cursor: pointer;
`

export const Required = styled.ul`
  padding: 0 1.5rem;
  font-size: 0.8rem;
  color: var(--fourth-color);
`

export const OtherOptions = styled.div`

  & div {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    position: relative;

  }

  & span {
    margin: 0 1rem;
    font-size: 1rem;
    color: var(--text-opacity-color);
  }
`

export const Line = styled.div`
  border-bottom: 1px solid var(--text-opactity-color);
  width: 100%;
  display: flex;
  margin: 1.5rem 0 0 0;
`

export const Google = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ImgGoogle = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`
