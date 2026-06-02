import axios from "axios";

const trackIP = async function (ip) {
  try {
    // TODO: 要再確認一下可以直接餵給 netlify 的專案環境變數怎麼設定
    const apiKey =
      import.meta.env.VITE_API_KEY ?? "at_uLOQB7TOVqfND5DSUS3ZAhBGdgGPZ";
    const ipAddress = ip ? ip : "";

    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`,
    );

    return response;
  } catch (err) {
    throw `${err} 💣`;
  }
};

export default trackIP;
