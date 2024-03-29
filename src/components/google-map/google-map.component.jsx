import React, { Component } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import { MapContainer } from "./google-map.styles"

export class MapComponent extends Component {
  constructor(props) {
    super(props)
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>
    }

    return (
      <MapContainer>
        <Map
          style={{
            width: "100%",
            height: "100%",
          }}
          google={this.props.google}
          initialCenter={{
            lat: 32.8908833,
            lng: -96.4802316,
          }}
          zoom={13}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Sideways BBQ"}
            position={{ lat: 32.8895911, lng: -96.4811587 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={"SpringHill Suites"}
            position={{ lat: 32.8928447, lng: -96.4793104 }}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            {this.state.selectedPlace.name === "Sideways BBQ" ? (
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
                <p>26 October 2019</p>
                <p>5 - 8 pm</p>
              </div>
            ) : (
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
                <p>Please call <a href="tel:888-287-9400">888-287-9400</a> and mention Charlie Baucom's birthday for the discount rate of $125.</p>
                <p>All reservations must be made by Wednesday, <strong>September 25, 2019</strong>.</p>
              </div>
            )}
          </InfoWindow>
        </Map>
      </MapContainer>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
  v: "3",
})(MapComponent)
