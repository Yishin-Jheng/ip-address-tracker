import InfoContent from "./InfoContent.js";

function InfoList({ ipData, errMsg }) {
  if (!errMsg) {
    return (
      <div className="ip-info">
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
