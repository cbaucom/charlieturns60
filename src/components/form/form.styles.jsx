import styled from "styled-components"

export const Card = styled.article`
  background: #fff;
  padding: 2rem;
  margin: 1rem auto;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  transition: 0.25s;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0.1rem;
  }
  @media (min-width: 767px) {
    /* custom nonsense */
    min-height: 603px;
  }
  @media (min-width: 800px) {
    /* custom nonsense */
    min-height: 530px;
  }
`

export const FormWrapper = styled.div`
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  form {
    text-align: left;
  }
  .form-error {
    margin: 0 0 1rem 0;
    font-style: italic;
    color: red;
    text-align: center;
  }
  label {
    margin-bottom: 1rem;
    text-align: left;
    font-size: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    box-sizing: border-box;
    margin: 0.25rem 0 0.75rem;
    padding: 0.25rem;
    font-size: 1rem;
    border: 1px solid RGBA(68, 142, 199, 0.3);
    &:focus {
      outline: 0;
      border-color: #d81103;
    }
  }
  select {
    font-size: 1.25rem;
  }

  .same-line {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    align-items: baseline;
    margin: 0.5rem 0;
    @media (min-width: 600px) {
      grid-template-columns: 1fr 2fr;
    }
  }

  .react-date-picker__wrapper {
    width: 100%;
    border: 1px solid RGBA(68, 142, 199, 0.3);
  }
  .react-date-picker__inputGroup input {
    border: none;
    margin: 0;
    width: 100% !important;
  }
`
