import InfoContent from "./InfoContent.jsx";

function InfoList({ ipData, errMsg }) {
  // TODO: if/else 改成三元運算
  if (!errMsg) {
    return (
      <div className="absolute w-[75%] left-[50%] bottom-0 z-900 transform translate-x-[-50%] translate-y-[50%] flex justify-evenly gap-20 bg-white p-12 rounded-[10px] max-mobile:gap-12 max-phone:flex-col">
        {/* TODO: 感覺很繁瑣，可以再整理一下資料格式，改用 map */}
        {/* TODO: 分隔線目前是用偽元素做的，之後要改成實元素（參見scss 143行） */}
        <InfoContent label="IP Address" value={ipData.ip} />
        <InfoContent label="Location" value={ipData.country} />
        <InfoContent
          label="Timezone"
          value={ipData.timezone ? `UTC ${ipData.timezone}` : ""}
        />
        <InfoContent label="ISP" value={ipData.isp} />
      </div>
    );
  } else {
    console.error(errMsg);

    return (
      <div className="absolute w-[75%] left-[50%] bottom-0 z-900 transform translate-x-[-50%] translate-y-[50%] flex justify-evenly gap-20 bg-white p-12 rounded-[10px] max-mobile:gap-12 max-phone:flex-col">
        <div className="text-red text-[2.2rem] text-center font-bold leading-[1.7] whitespace-pre-line max-phone:text-[2.4rem]">
          {errMsg}
        </div>
      </div>
    );
  }
}

export default InfoList;
