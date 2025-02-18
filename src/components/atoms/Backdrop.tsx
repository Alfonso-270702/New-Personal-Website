interface BackdropProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Backdrop = ({ isSidebarOpen, setSidebarOpen }: BackdropProps) => {
  return (
    <div
      className={`fixed inset-0 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 h-[calc(100vh-100px)] top-[100px] ${
        isSidebarOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"
      }`}
      onClick={() => setSidebarOpen(false)}
    />
  );
};

export default Backdrop;
