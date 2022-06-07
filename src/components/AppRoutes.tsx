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
import { PostPage } from "pages";
import { Layout } from "./Layout";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />

        <Route path="/" element={<PrivateRoutes />}>
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/explore"
            element={
              <Layout>
                <Explore />
              </Layout>
            }
          />
          <Route
            path="/post/:postid"
            element={
              <Layout>
                <PostPage />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/notifications"
            element={
              <Layout>
                <Notifications />
              </Layout>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <Layout>
                <Bookmarks />
              </Layout>
            }
          />
        </Route>

        <Route path="/test" element={<TwopiRest />} />
      </Routes>
    </>
  );
};
