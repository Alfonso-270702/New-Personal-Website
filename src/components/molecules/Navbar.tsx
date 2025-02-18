import { NavLink, useLocation } from "react-router";

interface NavbarProps {
  setSidebarOpen: (open: boolean) => void;
}
const Navbar = ({ setSidebarOpen }: NavbarProps) => {
  const location = useLocation();
  return (
    <div className="fixed top-0 left-0 w-full h-[100px] px-[36px] py-[29px] border-2 border-white flex justify-end gap-[72px]">
      <NavLink
        to={"/"}
        className="text-[28px] text-white"
        onClick={() => setSidebarOpen(false)}
      >
        PROJECTS
      </NavLink>
      <NavLink
        to={"/about/experience"}
        onClick={() => setSidebarOpen(false)}
        className={`text-white text-[28px] ${
          location.pathname.startsWith("/about") ? "font-bold" : ""
        }`}
      >
        ABOUT ME
      </NavLink>
      <NavLink
        to={"/contact"}
        onClick={() => setSidebarOpen(false)}
        className="text-[28px] text-white"
      >
        CONTACT
      </NavLink>
    </div>
  );
};

export default Navbar;
