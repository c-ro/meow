// @flow

import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

type State = {
  lat: number,
  lng: number,
  zoom: number,
};

export default class MapViewPage extends Component<{}, State> {
  state = {
    lat: 38.045,
    lng: -84.5,
    zoom: 15,
  };

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  };
}
