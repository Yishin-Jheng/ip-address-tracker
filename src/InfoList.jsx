import InfoContent from "./InfoContent.js";

function InfoList({ ipData, errMsg }) {
  // TODO: 不要用 if 來做元件顯示邏輯
  if (!errMsg) {
    return (
      <div className="ip-info">
        {/* TODO: 感覺很繁瑣，可以再整理一下資料格式，改用 map */}
        <InfoContent label="IP Address" data={ipData.ip} />
        <InfoContent label="Location" data={ipData.country} />
        <InfoContent
          label="Timezone"
          data={ipData.timezone ? `UTC ${ipData.timezone}` : ""}
        />
        <InfoContent label="ISP" data={ipData.isp} />
      </div>
    );
  } else {
    console.error(errMsg);

    return (
      <div className="ip-info">
        <div className="ip-info__error">{errMsg}</div>
      </div>
    );
  }
}

export default InfoList;
