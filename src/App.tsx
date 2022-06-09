import { useAppSelector } from "hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDarkTheme } from "appRedux/themeSlice";
import { AppRoutes, Header } from "./components";
import { Link } from "react-router-dom";
import { setToken, setUser } from "appRedux/userSlice";
import { getUserFromToken } from "apiCalls";

function App() {
  const darkTheme = useAppSelector((state) => state.theme);
  const dispatch = useDispatch();

  // For auto login
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token") ?? "";
        if (token !== "") {
          const user = await getUserFromToken(token).then((res) => res.data);
          dispatch(setToken(token));
          dispatch(setUser(user));
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // For Theme
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
  }, []);

  return (
    <div className={`App flex flex-col h-full w-full `}>
      <Link to="/test">twopi</Link>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
