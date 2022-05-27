import { Createpost, Sidebar } from "components";

export const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-full w-full md:justify-center dark:bg-darkCol">
      <Sidebar />
      <Createpost />
    </div>
  );
};
