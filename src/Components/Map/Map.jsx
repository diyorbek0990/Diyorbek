import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './MyMap.css'

function MyMap() {
  const position = [41.2995, 69.2401]; // Tashkentning kenglik va uzunlik koordinatalari

  return (
    <MapContainer center={position} zoom={5} style={{ height: '200px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Bu yer Toshkent! <br /> Bu erda xaritani o'rganishingiz mumkin.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
