function InfoList({ ipData }) {
  return (
    <div className="ip-info">
      <div className="ip-info__address">
        <span className="ip-info__title">IP Address</span>
        <span className="ip-info__content">{ipData.ip}</span>
      </div>
      <div className="ip-info__location">
        <span className="ip-info__title">Location</span>
        <span className="ip-info__content">{ipData.country}</span>
      </div>
      <div className="ip-info__timezone">
        <span className="ip-info__title">Timezone</span>
        <span className="ip-info__content">
          {ipData.timezone ? `UTC ${ipData.timezone}` : ""}
        </span>
      </div>
      <div className="ip-info__isp">
        <span className="ip-info__title">ISP</span>
        <span className="ip-info__content">{ipData.isp}</span>
      </div>
    </div>
  );
}

export default InfoList;
