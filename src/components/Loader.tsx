export const Loader = () => {
  return (
    <div className=" flex items-center justify-center dark:bg-darkCol h-screen w-screen absolute bg-white ">
      <div className="flex animate-bounce items-center">
        <img src="/assets/pin.svg" alt="logo image" className="h-6 sm:h-10 " />
        <h1 className="text-2xl sm:text-4xl self-center text-darkCol dark:text-primary ">
          Social
        </h1>
      </div>
    </div>
  );
};
