import { Routes, Route } from "react-router-dom";
import { Home, LandingPage, Login } from "pages";
import { SignupComponent } from "./signupComponent/SignupComponent";
import { LoginComponent } from "./LoginComponent";
import TwopiRest from "twopi-rest";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="/test" element={<TwopiRest />} />
      </Routes>
    </>
  );
};
