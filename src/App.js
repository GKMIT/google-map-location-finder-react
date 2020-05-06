import React from 'react';
import Autocomplete from './component/autocomplete'
import MapContainer from './component/google-map'
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      position: {
        lat: 24.585445,
        lng: 73.712479
      }
    }
  }

  setPosition = (lat, lng) => {
    this.setState({
      position: {
        lat, lng
      }
    })
  }


  render() {
    const { position } = this.state
    return (
      <React.Fragment>
        <Autocomplete setPosition={this.setPosition} />
        <MapContainer position={position} />
      </React.Fragment>
    )
  }
}

export default App