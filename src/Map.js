import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import marker from "./images/icon-location.png";

function Map({ locData }) {
  const position = locData;

  const customIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    iconSize: [30, 37],
    iconAnchor: [15, 37],
  });

  return (
    <MapContainer
      className="map"
      center={position}
      zoom={8}
      scrollWheelZoom={true}
      key={`${locData}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position} icon={customIcon}></Marker>
    </MapContainer>
  );
}

export default Map;
