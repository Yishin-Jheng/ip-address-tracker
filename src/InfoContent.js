function InfoContent(props) {
  return (
    <div className="ip-info__list">
      <span className="ip-info__title">{props.label}</span>
      <span className="ip-info__content">{props.data}</span>
    </div>
  );
}

export default InfoContent;
