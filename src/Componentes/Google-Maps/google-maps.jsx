import React from "react";
import { GoogleMap, MarkerF, LoadScript } from '@react-google-maps/api';
import { API_KEY } from "./API_KEY.env";
export default function Map() {
  const mapContainerStyle = {
    width: '40%',
    height: '40vh'
  };

  const defaultCenter = {
    lat: 6.25042325,
    lng: -75.5685120067321
  };

  const markerPosition = {
    lat: 6.25042325,
    lng: -75.5685120067321
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={13}
      >
        <MarkerF position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
}