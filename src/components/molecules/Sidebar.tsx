import { useNavigate, useLocation } from "react-router";
import Backdrop from "../atoms/Backdrop";
import { profileData } from "../../static/profileData";
import ProfileCard from "../atoms/ProfileCard";

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ isSidebarOpen, setSidebarOpen }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {/* Overlay untuk mencegah klik carousel saat sidebar terbuka */}
      <Backdrop isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Sidebar */}
      <div
        className={`fixed top-[100px] left-0 h-[calc(100vh-100px)] w-[593px] sidebar-open text-white shadow-lg border-2 border-t-0 transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={() => setSidebarOpen(false)}
      >
        <ProfileCard
          profileName={profileData.name}
          description={profileData.desc}
          isButton={true}
          buttonFunction={() => {
            navigate("/contact");
            setSidebarOpen(false);
          }}
          buttonContent="GET CONNECTED"
          containerClass="p-[32px] flex flex-col"
          imgStyle="w-full h-[420px] object-cover"
          profileNameStyle="text-[46px] font-bold"
          profileDescStyle="text-[18px] text-justify"
        />
      </div>

      {/* Tombol untuk membuka sidebar */}
      {!isSidebarOpen && (
        <div
          onClick={() => {
            if (!location.pathname.startsWith("/contact")) {
              setSidebarOpen(true);
            }
          }}
          className="fixed left-0 top-[100px] h-[calc(100vh-100px)] w-[100px] border-2 border-t-0 border-white flex flex-col justify-center items-center cursor-pointer z-50"
        >
          <p className="text-[28px] text-white rotate-[-90deg] tracking-wider whitespace-nowrap">
            ALFONSO SIRAIT | FRONT END
          </p>
        </div>
      )}
    </>
  );
};

export default Sidebar;
