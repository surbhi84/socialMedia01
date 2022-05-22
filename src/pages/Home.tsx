export const Home = () => {
  return (
    <div>
      <header className=" flex flex-row m-2 ">
        <img src="/assets/pin.svg" alt="logo image" className="h-8" />
        <h1 className="bg-primary text-2xl self-center">Social</h1>
      </header>
      <main className="flex flex-col align-center justify-center ">
        <img src="/assets/social.svg" alt="texting image" className="h-48" />
        <div>
          <Link>Login</Link>
          or
          <Link>Signup</Link>
        </div>
      </main>
    </div>
  );
};
