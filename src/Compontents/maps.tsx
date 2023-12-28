import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
  const mapCenter: [number, number] = [51.505, -0.09]; // Define the map center coordinates
  const mapZoom: number = 13; // Define the initial zoom level

  return (
    <MapContainer
      style={{ height: '400px', width: '100%' }}
      zoom={mapZoom} // Set the initial zoom level for the map
      center={mapCenter} // Set the initial center coordinates for the map
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapComponent;
