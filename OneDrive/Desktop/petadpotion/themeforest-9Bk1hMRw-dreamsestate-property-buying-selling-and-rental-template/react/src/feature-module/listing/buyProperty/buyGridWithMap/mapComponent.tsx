import React, { useState } from 'react';
// import GoogleMapReact, { Coords } from 'google-map-react';

interface Location {
  id: number;
  lat: number;
  lng: number;
  rent_prize: string;
  rent_bed: string;
  rent_baths: string;
  rent_sqft: string;
  rent_listedon: string;
  rent_Category: string;
  rent_name: string;
  total_review: string;
  rent_address: string;
  image: string;
  profile_image: string;
}

const MapComponent: React.FC<{ apiKey: string; locations: Location[] }> = ({ apiKey, locations }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const renderMarkers = () => {
    return locations.map((location) => (
      <Marker
        key={location.id}
        lat={location.lat}
        lng={location.lng}
        location={location}
        onClick={() => handleMarkerClick(location)}
      />
    ));
  };

  return (
    <div style={{ height: '600px', width: '100%' }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: locations[0].lat, lng: locations[0].lng }}
        defaultZoom={14}
      >
        {renderMarkers()}
      </GoogleMapReact>
      {selectedLocation && (
        <div className="info-window">
          <h3>{selectedLocation.rent_name}</h3>
          <p>{selectedLocation.rent_address}</p>
          <p>Price: {selectedLocation.rent_prize}</p>
          <p>Bedrooms: {selectedLocation.rent_bed}</p>
          <p>Bathrooms: {selectedLocation.rent_baths}</p>
          <p>Square Footage: {selectedLocation.rent_sqft}</p>
          <p>Listed On: {selectedLocation.rent_listedon}</p>
        </div>
      )} */}
    </div>
  );
};

const Marker: React.FC<{ lat: number; lng: number; location: Location; onClick: () => void }> = ({
  lat,
  lng,
  location,
  onClick,
}) => {
  return (
    <div className="marker" onClick={onClick}>
      <img src={location.image} alt="Property" />
    </div>
  );
};

export default MapComponent;
