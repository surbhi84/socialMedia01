import { useAppSelector } from "hooks";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const token = useAppSelector((state) => state.userData.encodedToken);
  return <>{token == null || token == "" ? <Navigate to="/" /> : <Outlet />}</>;
};
