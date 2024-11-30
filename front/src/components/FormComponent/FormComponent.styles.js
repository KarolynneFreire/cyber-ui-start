import styled from 'styled-components';

export const Form = styled.form`
  background: var(--form-color);
  font-family: 'Poppins', sans-serif;
  border-radius: 4px;
  padding: 2rem;
  max-width: 450px;
  margin: 0 auto;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  font-family: "Sen", sans-serif;
  border: solid 1px;
  border-image-source: var(--third-color);
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
    padding: 0.75rem;
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

  button {
  display: block;
  height: 50px;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  padding: 0.75rem;
  background-image: var(--third-color);
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: #004d99;
  }
}

  div {
    margin-bottom: 1.5rem;
  }
`;
