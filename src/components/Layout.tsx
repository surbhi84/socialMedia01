import { Sidebar } from "./Sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-6 p-4 w-full min-h-screen md:justify-center dark:bg-darkCol dark:text-white ">
        <Sidebar />
        {children}
      </div>
    </>
  );
};
