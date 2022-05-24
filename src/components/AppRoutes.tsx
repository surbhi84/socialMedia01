import { Routes, Route } from "react-router-dom";
import { Home, Login } from "pages";
import { SignupComponent } from "./SignupComponent";
import { LoginComponent } from "./LoginComponent";
export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
      </Routes>
    </>
  );
};
