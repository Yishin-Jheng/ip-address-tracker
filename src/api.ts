import axios from "axios";

interface IpifyResponse {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}

const trackIP = async function (ip?: string): Promise<IpifyResponse> {
  try {
    const ipAddress = ip ? ip : "";
    const response = await axios.get<IpifyResponse>(
      `/.netlify/functions/get-geo?ip=${ipAddress}`,
    );

    return response.data;
  } catch (err) {
    if (err instanceof Error) throw err;

    throw new Error(String(err));
  }
};

export default trackIP;
