"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = ({ latitude, longitude, zoom }) => {
  if (latitude === undefined || longitude === undefined || zoom === undefined) {
    return null; // Or handle this case in a way that makes sense for your application
  }
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default LeafletMap;
