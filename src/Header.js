function Header() {
  return (
    <div className="header">
      IP Address Tracker
      <div className="search-bar">-----Search bar-----</div>
      <div className="ip-info">
        <div className="ip-info__address">IP Address</div>
        <div className="ip-info__location">Location</div>
        <div className="ip-info__timezone">Timezone</div>
        <div className="ip-info__isp">ISP</div>
      </div>
    </div>
  );
}

export default Header;
