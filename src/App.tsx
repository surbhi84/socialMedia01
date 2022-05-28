import { useAppSelector } from "hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDarkTheme } from "appRedux/themeSlice";
import { AppRoutes, Header } from "./components";
import { Link } from "react-router-dom";

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

  return (
    <div
      className={`App flex flex-col h-screen w-screen overflow-y-scroll  ${
        darkTheme ? "dark " : ""
      }`}
    >
      <Link to="/test">twopi</Link>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
