type AsideBannerProps = {
  bgImage: string;
};

const AsideBanner = ({ bgImage }: AsideBannerProps) => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <div className="w-full h-auto flex flex-col gap-3">
      <button
        onClick={onClick}
        className={`w-full h-28 flex justify-between rounded-[10px] bg-center bg-no-repeat bg-cover border border-gray-300`}
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      />
    </div>
  );
};

export default AsideBanner;
