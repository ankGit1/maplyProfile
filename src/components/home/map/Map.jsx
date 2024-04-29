// Map.js
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
let apiKey = import.meta.env.VITE_secretGoogleMapsKey;
const Map = () => {
  let { center } = useLocation().state;
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapRef = useRef();

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    googleMapScript.async = true;
    googleMapScript.onload = () => {
      setIsMapLoaded(true);
    };
    document.body.appendChild(googleMapScript);

    return () => {
      document.body.removeChild(googleMapScript);
    };
  }, [apiKey]);

  useEffect(() => {
    if (isMapLoaded) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: 14,
      });

      // Add marker
      new window.google.maps.Marker({
        position: center,
        map: map,
      });
    }
  }, [isMapLoaded, center, 14]);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
};

export default Map;
