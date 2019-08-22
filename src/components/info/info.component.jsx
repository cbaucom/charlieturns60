import React from "react"
import Emoji from 'a11y-react-emoji'

import MapComponent from "../google-map/google-map.component"

import { StyledLink } from "../link/link.styled"
import { InfoContainer, CheersContainer, ImageContainer, DetailsContainer, TextContainer } from "./info.styles";

class Info extends React.Component {
  static defaultProps = {
    center: {
      lat: 32.88,
      lng: -96.5,
    },
    zoom: 13,
  }
  render() {
    return (
      <InfoContainer>
        <ImageContainer />
        <CheersContainer>
          <h2>
            <Emoji symbol="🍻" label="beer cheers emoji" />{" "}
            Cheers to Charlie turning 60{" "}
            <Emoji symbol="🍻" label="beer cheers emoji" />
          </h2>
          <p>Join us for drinks, dinner, and dancing!</p>
        </CheersContainer>
        <DetailsContainer>
          <TextContainer>
            <div className="where">
              <h3>Where:</h3>
              <p><a href="https://sidewaysbbq.com/" className="bbq-link">Sideways BBQ</a> at the Harbor</p>
              <p>2067 Summer Lee, Rockwall, TX</p>
            </div>
            <div className="when">
              <h3>When:</h3>
              <p>26 October 2019</p>
              <p>5 - 8 pm</p>
            </div>
          </TextContainer>
          <MapComponent />
        </DetailsContainer>
        <StyledLink to="/rsvp">RSVP</StyledLink>
      </InfoContainer>
    )
  }
}

export default Info
