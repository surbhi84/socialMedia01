import { Routes, Route } from "react-router-dom";
// for testing
import TwopiRest from "twopi-rest";
import {
  Bookmarks,
  Explore,
  Home,
  LandingPage,
  Notifications,
  ProfilePage,
  PostPage,
} from "pages";
import {
  SignupComponent,
  LoginComponent,
  PrivateRoutes,
  Layout,
  LoggedOutRoutes,
} from "components";
import { Loader } from "./Loader";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoggedOutRoutes />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
        </Route>

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
            path="/profile/:username"
            element={
              <Layout>
                <ProfilePage />
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
        <Route path="/load" element={<Loader />} />
      </Routes>
    </>
  );
};
