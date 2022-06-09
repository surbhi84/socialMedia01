import { useAppSelector } from "hooks";
import { Navigate, Outlet } from "react-router-dom";

export const LoggedOutRoutes = () => {
  const token = useAppSelector((state) => state.userData.encodedToken);
  return (
    <>{token == null || token == "" ? <Outlet /> : <Navigate to="/home" />}</>
  );
};
