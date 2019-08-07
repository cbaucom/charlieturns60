import styled from "styled-components"

export const ButtonContainer = styled.div`
  display: flex;
  /* margin: 0 auto; */
  max-width: 300px;
  width: 100%;
  button {
    appearance: none;
    background-image: linear-gradient(-180deg, #94bae9 0%, #94bae9 100%);
    border: 1px solid #94bae9;
    box-shadow: 0 1px 5px 0 RGBA(68, 142, 199, 0.8),
      inset 0 1px 0 0 RGBA(148, 186, 233, 1),
      inset 0 2px 4px 0 RGBA(148, 186, 233, 1);
    border-radius: 5px;
    color: #fefefe;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    padding: 5px;
    max-width: 200px;
    height: 50px;
    text-decoration: none;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    width: 100%;
    &:hover {
      transform: scale(1.01);
      box-shadow: 0px 0px 10px 4px RGBA(250, 250, 250, 0.8),
        inset 0 1px 0 0 RGBA(148, 186, 233, 1),
        inset 0 2px 4px 0 RGBA(148, 186, 233, 1);
    }
  }
`