import { useAppSelector } from "hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDarkTheme } from "userRedux/themeSlice";
import { AppRoutes, Header } from "./components";

function App() {
  const darkTheme = useAppSelector((state) => state.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    let theme = localStorage.getItem("darkTheme");
    if (theme !== undefined) {
      if (theme === "true") {
        dispatch(setDarkTheme(true));
      } else if (theme === "false") {
        dispatch(setDarkTheme(false));
      }
    }
  }, []);
  console.log(darkTheme);
  return (
    <div
      className={`App flex flex-col h-screen w-screen ${
        darkTheme ? "dark " : ""
      }`}
    >
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
