import React from 'react';
import Autocomplete from 'react-google-autocomplete';

export class MapAutocomplete extends React.Component {

    setPosition = (data) => {
        this.props.setPosition(data.lat(), data.lng())
    }

    render() {
        return (
            <Autocomplete
                style={{ width: '100%', height: '50px' }}
                onPlaceSelected={(place) => {
                    this.setPosition(place.geometry.location)
                }}
                types={['(regions)']}
                componentRestrictions={{ country: "in" }}
            />
        )
    }
}

export default MapAutocomplete