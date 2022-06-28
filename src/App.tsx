import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDarkTheme } from "appRedux/themeSlice";
import { AppRoutes, Header, Loader, Popup } from "./components";
import { updateUserState } from "appRedux/userSlice";
import { getUserFromToken } from "apiCalls";
import { useAppSelector } from "hooks";

function App() {
  const [isInitialRender, setIsInitialRender] = useState(true);

  const popupMsg = useAppSelector((state) => state.misc.popupMsg);

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
    if (theme !== undefined && theme !== null) {
      if (theme === "true") {
        window.document.documentElement.classList.add("dark");
        localStorage.setItem("darkTheme", "true");
        dispatch(setDarkTheme(true));
      } else if (theme === "false") {
        window.document.documentElement.classList.remove("dark");
        localStorage.setItem("darkTheme", "false");
        dispatch(setDarkTheme(false));
      }
    } else {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("darkTheme", "true");
      dispatch(setDarkTheme(true));
    }
  }, []);

  return (
    <div className={`App flex flex-col h-full w-full `}>
      {isInitialRender ? (
        <Loader />
      ) : (
        <>
          <Header />
          <AppRoutes />
          {popupMsg !== "" && <Popup />}
        </>
      )}
    </div>
  );
}

export default App;
