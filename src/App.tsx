import { useEffect, useState } from "react";
import trackIP from "./api.js";
import SearchBar from "./SearchBar.js";
import InfoList from "./InfoList.js";
import Map from "./Map.js";

export interface IpData {
  ip?: string;
  country?: string;
  timezone?: string;
  isp?: string;
}

function App() {
  const [ipData, setIpData] = useState<IpData>({});
  const [locData, setLocData] = useState<[number, number]>([23.5531, 121.0211]);
  const [errMsg, setErrMsg] = useState("");

  const fetchData = async function (ip: string = "") {
    try {
      const result = await trackIP(ip);
      const ipInfo = {
        ip: result.ip,
        country: result.location.region,
        timezone: result.location.timezone,
        isp: result.isp,
      };
      const locationInfo: [number, number] = [
        result.location.lat,
        result.location.lng,
      ];

      setIpData(ipInfo);
      setLocData(locationInfo);
      setErrMsg(``);
    } catch (err) {
      setErrMsg(`⚠️ Something wrong with fetching data.
      Please turn off your AD blocker or check your internet.`);
    }
  };

  // fetch data when user load the page
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <header className="h-[30vh] relative pt-12 pb-40 bg-[url(./src/images/pattern-bg.png)] bg-cover flex flex-col gap-8 justify-center items-center max-phone:gap-[10%] max-phone:h-[40vh] max-phone:pt-0 max-phone:pb-80">
        <h1 className="text-white text-[2.8rem] leading-none font-bold max-phone:text-[3rem]">
          IP Address Tracker
        </h1>
        <SearchBar onSubmit={(ip) => fetchData(ip)} />
        <InfoList ipData={ipData} errMsg={errMsg} />
      </header>
      <Map locData={locData} />
    </div>
  );
}

export default App;
