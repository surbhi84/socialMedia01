import { Routes, Route } from "react-router-dom";
import TwopiRest from "twopi-rest";
import {
  Bookmarks,
  Explore,
  Home,
  LandingPage,
  Login,
  Notifications,
  Profile,
} from "pages";
import { SignupComponent } from "./signupComponent/SignupComponent";
import { LoginComponent } from "./LoginComponent";
import { PrivateRoutes } from "./PrivateRoutes";
import { PostPage } from "./PostPage";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />

        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/post/:postid" element={<PostPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Route>

        <Route path="/test" element={<TwopiRest />} />
      </Routes>
    </>
  );
};
