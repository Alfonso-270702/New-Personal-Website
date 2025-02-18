import { NavLink } from "react-router";

interface Title {
  title: string;
  redirectURL: string;
  redirectText: string;
}

const Title = ({ title, redirectURL, redirectText }: Title) => {
  return (
    <div className="flex items-center justify-between w-full h-[122px]">
      <p className="text-[96px] text-white font-bold">{title}</p>
      <div className="flex items-center">
        <NavLink
          to={redirectURL}
          className="text-[24px] font-normal text-[#D3D9D4] mr-[10px]"
        >
          {redirectText}
        </NavLink>
        <svg
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.75 9L24.4571 8.29289L25.1642 9L24.4571 9.70711L23.75 9ZM1.25 10C0.697716 10 0.25 9.55229 0.25 9C0.25 8.44772 0.697716 8 1.25 8V10ZM16.9571 0.792893L24.4571 8.29289L23.0429 9.70711L15.5429 2.20711L16.9571 0.792893ZM24.4571 9.70711L16.9571 17.2071L15.5429 15.7929L23.0429 8.29289L24.4571 9.70711ZM23.75 10H1.25V8H23.75V10Z"
            fill="#D3D9D4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Title;
