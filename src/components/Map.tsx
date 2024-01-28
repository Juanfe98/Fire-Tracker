"use client"
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%' // Set the desired height
};

const center = {
  lat: 39.067448,
  lng:-105.650918 
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC6oG35-v8dbn7Zb3cvi3EQY7ClaQVTirs">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
      >
        {/* Your map markers or other components here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
