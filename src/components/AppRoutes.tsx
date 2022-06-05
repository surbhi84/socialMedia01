import { Routes, Route } from "react-router-dom";
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
import TwopiRest from "twopi-rest";
import { PrivateRoutes } from "./PrivateRoutes";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Route>

        <Route path="/test" element={<TwopiRest />} />
      </Routes>
    </>
  );
};
