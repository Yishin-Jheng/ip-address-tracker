import { useEffect, useState } from "react";
import trackIP from "./api.js";
import SearchBar from "./SearchBar.js";
import InfoList from "./InfoList.js";
import Map from "./Map.js";
import "./scss/style.scss";

// test ip: 133.242.187.207

function App() {
  const [ipData, setIpData] = useState({});
  const [locData, setLocData] = useState([23.5531, 121.0211]);

  const fetchData = async function (ip) {
    try {
      const result = await trackIP(ip);
      const ipInfo = {
        ip: result.data.ip,
        country: result.data.location.region,
        timezone: result.data.location.timezone,
        isp: result.data.isp,
      };

      const locationInfo = [result.data.location.lat, result.data.location.lng];

      setIpData(ipInfo);
      setLocData(locationInfo);
    } catch (err) {
      console.error(err);
    }
  };

  // fetch data when user load the page
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async function (ip) {
    try {
      fetchData(ip);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>IP Address Tracker</h1>
        <SearchBar onSubmit={handleSubmit} />
        <InfoList ipData={ipData} />
      </div>
      <Map locData={locData} />
    </div>
  );
}

export default App;
