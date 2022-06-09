import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDarkTheme } from "appRedux/themeSlice";
import { AppRoutes, Header, Sidebar } from "./components";
import { Link } from "react-router-dom";
import { updateUserState } from "appRedux/userSlice";
import { getPosts, getUserFromToken } from "apiCalls";

function App() {
  const darkTheme = useAppSelector((state) => state.theme);
  const token = useAppSelector((state) => state.userData.encodedToken);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const dispatch = useDispatch();

  // For auto login
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        if (token !== "" && token !== null && token !== undefined) {
          const user = await getUserFromToken(token).then(
            (res) => res.data.user
          );
          dispatch(updateUserState({ encodedToken: token, user }));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsInitialRender(false);
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
      {isInitialRender ? (
        <p>LOADING</p>
      ) : (
        <>
          <Link to="/test">twopi</Link>
          <Header />
          <AppRoutes />
        </>
      )}
    </div>
  );
}

export default App;
