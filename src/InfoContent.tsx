interface InfoContentProps {
  label: string;
  value?: string;
}

const dividerStyle =
  "relative first:after:content-none after:content-[''] after:absolute after:top-[5%] after:left-[-3rem] after:w-px after:h-[90%] after:bg-gray-light after:opacity-[0.3] max-mobile:after:left-[-2rem] max-phone:after:content-none";

function InfoContent(props: InfoContentProps) {
  const { label, value } = props;
  const showValue = value || "-";

  return (
    <div
      className={`flex flex-col gap-6 max-phone:items-center ${dividerStyle}`}
    >
      <span className="text-[1.2rem] text-gray-light font-medium tracking-[1px] uppercase">
        {label}
      </span>
      <span className="text-[2.2rem] text-gray-dark font-bold max-phone:text-[2.4rem]">
        {showValue}
      </span>
    </div>
  );
}

export default InfoContent;
