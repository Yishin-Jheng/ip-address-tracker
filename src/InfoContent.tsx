interface InfoContentProps {
  label: string;
  value?: string;
}

function InfoContent(props: InfoContentProps) {
  const { label, value } = props;
  const showValue = value || "-";

  return (
    <div className="flex flex-col gap-6 max-phone:items-center">
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
