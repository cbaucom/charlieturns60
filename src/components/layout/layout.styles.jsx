import styled from "styled-components"

export const LayoutContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background-color: #94bae9;
  /* background-color: #032448; */
  /* background-image: linear-gradient(180deg, #4285f4 0%, #0088ef 100%); */
  color: white;
`

export const MainContainer = styled.main`
  width: 90vw;

  max-width: 960px;
  color: #032448;
  margin: 2rem auto;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`

export const FooterContainer = styled.footer`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  /* animation: slide-in-blurred-bottom 1.25s cubic-bezier(0.175, 0.885, 0.320, 1.275) both; */
  animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  a {
    color: #fefefe;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all ease-in-out 1s;

    &:hover {
      border-color: #fefefe;
    }
  }
`