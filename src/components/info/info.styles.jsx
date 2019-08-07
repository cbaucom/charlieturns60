import styled from "styled-components"

import ceb_kid_img from "../../images/ceb-kid-headshot.png"
import ceb_old_img from "../../images/ceb-old-headshot.png"

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

export const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
  border-radius: 50%;

  transition: background-image 1s ease-in-out;
  background: url(${ceb_kid_img}) center center no-repeat;
  background-size: contain;

  &:hover {
    background-image: url(${ceb_old_img});
  }
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
  padding: 2rem 1rem;
  .where {
    padding-bottom: 2rem;
  }
  h2,
  p {
    margin-bottom: 10px;
  }
`