import { useAppSelector } from "hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDarkTheme } from "appRedux/themeSlice";
import { AppRoutes, Header } from "./components";
import { Link } from "react-router-dom";

function App() {
  const darkTheme = useAppSelector((state) => state.theme);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   let theme = localStorage.getItem("darkTheme");
  //   if (theme !== undefined) {
  //     if (theme === "true") {
  //       dispatch(setDarkTheme(true));
  //     } else if (theme === "false") {
  //       dispatch(setDarkTheme(false));
  //     }
  //   }
  // }, []);

  useEffect(() => {
    let theme = localStorage.getItem("darkTheme");
    if (theme !== undefined) {
      if (theme === "true") {
        window.document.documentElement.classList.add("dark");
        localStorage.setItem("darkTheme", "true");
        dispatch(setDarkTheme(true));
      } else if (theme === "false") {
        window.document.documentElement.classList.remove("dark");
        localStorage.setItem("darkTheme", "false");
        dispatch(setDarkTheme(false));
      }
    }
  }, [darkTheme]);

  return (
    <div className={`App flex flex-col h-full w-full   `}>
      <Link to="/test">twopi</Link>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
