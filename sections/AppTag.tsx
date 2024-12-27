import { FC } from "react";

const AppTag: FC = () => {
  return (
    <div className="bg-[#6A5DFF] text-white py-2">
      <p className="text-center text-sm font-medium sm:tracking-wider"><span>This site uses </span><span className="underline">Static Site Generation</span> in  <span className="font-bold">NextJS</span></p>
    </div>
  );
};

export default AppTag;
