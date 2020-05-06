import React from 'react';

export class MapContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mapIsReady: false,
        };
    }

    componentDidMount() {
        window.onload = this.setState({ mapIsReady: true });
    }

    componentDidUpdate() {
        if (this.state.mapIsReady) {
            const google = window.google

            this.map = new google.maps.Map(document.getElementById('map'), {
                center: this.props.position,
                zoom: 12,
                mapTypeId: 'roadmap',
            });

            new google.maps.Marker({ position: this.props.position, map: this.map });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ height: '400px', width: '100%' }} id="map"></div>
            </React.Fragment>
        );
    }
}

export default MapContainer