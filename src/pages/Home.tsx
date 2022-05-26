import { Createpost, Sidebar } from "components";

export const Home = () => {
  return (
    <div className="flex flex-row gap-4 h-full w-full justify-center dark:bg-darkCol">
      <Sidebar />
      <Createpost />
    </div>
  );
};
