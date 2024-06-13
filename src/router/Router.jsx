import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import NotFound from "../pages/NotFound";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../services/user";
import Loader from "../components/common/Loader";

const Router = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchUser(),
  });

  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
