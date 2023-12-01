"use client";
import { useEffect } from "react";

const LeafletMap = () => {
  useEffect(() => {
    // Dynamically import the necessary Leaflet components on the client side
    import("leaflet").then((L) => {
      // Now you can safely use Leaflet and its components
      const map = L.map("map").setView([31.39, 73.09], 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    });
  }, []); // Run this effect only once on component mount

  return <div id="map" style={{ height: "400px", width: "100%" }} />;
};

export default LeafletMap;
