import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Map({ locData }) {
  const position = locData;

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
      <Marker position={position}></Marker>
    </MapContainer>
  );
}

export default Map;
