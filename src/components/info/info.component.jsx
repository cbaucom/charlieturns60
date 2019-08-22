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
            <div className="lodging">
              <h3>Lodging:</h3>
              <p>SpringHill Suites Dallas Rockwall</p>
              <p>Please call <a href="tel:888-287-9400" className="hotel-phone-link">888-287-9400</a> and mention Charlie Baucom's birthday for the discount rate of $125.</p>
              <p>All reservations must be made by Wednesday, <strong>September 25, 2019</strong>.</p>
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
