import { useEffect, useState } from "react";
import trackIP from "./api.js";
import SearchBar from "./SearchBar.jsx";
import InfoList from "./InfoList.jsx";
import Map from "./Map.jsx";

function App() {
  const [ipData, setIpData] = useState({});
  const [locData, setLocData] = useState([23.5531, 121.0211]);
  const [errMsg, setErrMsg] = useState(``);

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
      setErrMsg(``);
    } catch (err) {
      const errorMessage = `⚠️ Something wrong with fetching data.
      Please turn off your AD blocker or check your internet.`;
      setErrMsg(errorMessage);
    }
  };

  // fetch data when user load the page
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async function (ip) {
    fetchData(ip);
  };

  return (
    <div className="w-full">
      <header className="h-[30vh] relative pt-12 pb-40 bg-[url(./src/images/pattern-bg.png)] bg-cover flex flex-col gap-8 justify-center items-center max-phone:gap-[10%] max-phone:h-[40vh] max-phone:pt-0 max-phone:pb-80">
        <h1 className="text-white text-[2.8rem] leading-none font-bold max-phone:text-[3rem]">
          IP Address Tracker
        </h1>
        <SearchBar onSubmit={handleSubmit} />
        <InfoList ipData={ipData} errMsg={errMsg} />
      </header>
      <Map locData={locData} />
    </div>
  );
}

export default App;
