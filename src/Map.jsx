import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import marker from "./images/icon-location.png";

function Map({ locData }) {
  const stadiaApiKey = import.meta.env.VITE_STADIA_MAP_API_KEY;
  const position = locData;

  const customIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    iconSize: [30, 37],
    iconAnchor: [15, 37],
  });

  return (
    <MapContainer
      id="map"
      className="map"
      center={position}
      zoom={8}
      scrollWheelZoom={true}
      key={`${locData}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=${stadiaApiKey}`}
      />
      <Marker position={position} icon={customIcon}></Marker>
    </MapContainer>
  );
}

export default Map;
