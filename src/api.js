import axios from "axios";

const trackIP = async function (ip) {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const ipAddress = ip ? ip : "";

    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
    );

    return response;
  } catch (err) {
    const error = `${err} 💣💣💣`;
    throw error;
  }
};

export default trackIP;
