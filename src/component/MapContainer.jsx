import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = ({ latitude, longitude }) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA1tLsqFHGxmMRVm6VLHsAUKmhMf_VQ1m0">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
