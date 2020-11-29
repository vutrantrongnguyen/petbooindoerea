/*global google*/
import React, { Component } from "react"
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps"

class Map extends Component {
  state = {
    directions: null,
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setState({data:this.props})
    const directionsService = new google.maps.DirectionsService()
    const { lat1, lng1, lat2, lng2 } = this.props
    const origin = { lat: lat1, lng: lng1 }
    const destination = { lat: lat2, lng: lng2 }

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          })
        } else {
          console.error(`error fetching directions ${result}`)
        }
      },
    )
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      >
        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>
    ))

    return (
      <div style={{displayAlign:"center"}}>
        <GoogleMapExample
          containerElement={<div style={{ height: `400px`, width: `500px`}} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

export default Map
