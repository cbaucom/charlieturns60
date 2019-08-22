import styled from "styled-components"

import kidPic from "../../images/ceb-kid-headshot.png"
import oldPic from "../../images/ceb-old-headshot.png"

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
  animation: image-slideshow 5s ease infinite alternate;
  /* background-size: contain; */
  background-image: url(${kidPic}), url(${oldPic});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0px 0px, 250px 0px;
`

export const DetailsContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  @media screen and (max-width: 767px) {
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

  .bbq-link,
  .hotel-phone-link {
    font-weight: 700;
    box-shadow: inset 0 -2px 0 0 #94bae9;
    margin: 0 0.15rem;
    border-bottom: 1px solid #94bae9;

    &:hover {
      background: #94bae9;
    }
  }

  .lodging p:last-child {
    font-size: 0.9rem;
  }
`
