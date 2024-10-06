import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

type MapProps = {
  center: LatLngExpression;
  zoom: number;
};

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  // State to track if the component has mounted (only render the map on the client side)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true once the component mounts
    setIsMounted(true);
  }, []);

  // If the component has not mounted yet, return a fallback (can be a loader)
  if (!isMounted) {
    return <div>Loading map...</div>;
  }

  // Render the map only on the client side
  return (
    <div className="w-full h-full">
      <MapContainer
        center={center}
        zoom={zoom}
        className="w-full h-[500px]"
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default Map;
