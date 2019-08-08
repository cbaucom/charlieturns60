import styled from "styled-components"

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 2rem 0;
  color: #fefefe;
  background: #94bae9;
`

export const CheersContainer = styled.div`
  animation: scale-in-center 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

export const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
  border-radius: 50%;
  animation: image-slideshow 7s linear infinite alternate;
  background-size: contain;
`

export const DetailsContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

export const TextContainer = styled.div`
  /* background-color: #94bae9; */
  background-color: #032448;
  color: #fefefe;
  text-align: center;
  padding: 1rem;

  .where {
    padding-bottom: 1rem;
  }

  h3 {
    background-color: #94bae9;
    padding: 1rem;
  }

  h3,
  p {
    margin-bottom: 1rem;
  }

  .bbq-link {
    position: relative;
    font-weight: 900;

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 3px;
      display: block;
      margin-top: 5px;
      right: 0;
      background: #fff;
      transition: width 0.2s ease;
    }

    &:hover:after {
      width: 100%;
      left: 0;
      background: #fff;
    }
  }
`
