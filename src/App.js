import React from 'react';
import MapBox from './component/google-map'
import Autocomplete from './component/autocomplete'
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      lat: 24.585445,
      lng: 73.712479
    }
  }

  setPosition = (lat, lng) => {
    this.setState({
      lat,
      lng
    })
  }

  render() {
    const { lat, lng } = this.state
    return (
      <React.Fragment>
        <Autocomplete setPosition={this.setPosition} />
        <MapBox lat={lat} lng={lng} />
      </React.Fragment>
    )
  }
}
export default App