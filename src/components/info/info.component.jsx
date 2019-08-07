import React from "react"

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
          <span role="img" aria-label="beer cheers emoji">
            🍻
          </span>{" "}
          Join us as we cheers to Charlie turning 60{" "}
          <span role="img" aria-label="beer cheers emoji">
            🍻
          </span>
        </CheersContainer>
        <DetailsContainer>
          <TextContainer>
            <div className="where">
              <h3>Where:</h3>
              <p>Sideways BBQ at the Harbor</p>
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
