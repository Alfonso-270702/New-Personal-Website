import { Outlet } from "react-router";

const AboutMe = () => {
  return (
    <div className="flex flex-col mt-[100px] ml-[100px] w-full overflow-hidden py-[34px] px-[36px] gap-[46px]">
      <Outlet />
    </div>
  );
};

export default AboutMe;
