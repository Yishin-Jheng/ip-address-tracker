import { IpData } from "./App.js";
import InfoContent from "./InfoContent.js";

interface InfoListProps {
  ipData: IpData;
  errMsg: string;
}

interface InfoItem {
  label: string;
  valueKey: keyof InfoListProps["ipData"];
  formatter?: (value: string) => string;
}

const infoSettingList: InfoItem[] = [
  { label: "IP Address", valueKey: "ip" },
  { label: "Location", valueKey: "country" },
  {
    label: "Timezone",
    valueKey: "timezone",
    formatter: (value: string) => (value ? `UTC ${value}` : ""),
  },
  { label: "ISP", valueKey: "isp" },
];

function InfoList(props: InfoListProps) {
  const { ipData, errMsg } = props;
  const isGetInfoSuccess = !errMsg;
  const isNil = (a: unknown) => a === undefined || a === null;

  return (
    <div className="absolute w-[75%] left-[50%] bottom-0 z-900 transform translate-x-[-50%] translate-y-[50%] flex justify-evenly gap-20 bg-white p-12 rounded-[10px] max-mobile:gap-12 max-phone:flex-col">
      {isGetInfoSuccess && (
        <>
          {infoSettingList.map((info) => {
            const value = ipData[info.valueKey];

            if (isNil(value)) return null;

            return (
              <InfoContent
                key={info.label}
                label={info.label}
                value={info.formatter ? info.formatter(value) : value}
              />
            );
          })}
        </>
      )}
      {!isGetInfoSuccess && (
        <div className="text-red text-[2.2rem] text-center font-bold leading-[1.7] whitespace-pre-line max-phone:text-[2.4rem]">
          {errMsg}
        </div>
      )}
    </div>
  );
}

export default InfoList;
