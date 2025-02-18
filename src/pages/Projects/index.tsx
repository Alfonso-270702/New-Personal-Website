import Carousel from "../../components/molecules/Carousel";
interface ProjectProps {
  isSidebarOpen: boolean;
}
const Project = ({ isSidebarOpen }: ProjectProps) => {
  return (
    <div className="flex justify-center items-center mt-[100px] ml-[100px] w-full overflow-hidden px-[20px]">
      <Carousel isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default Project;
