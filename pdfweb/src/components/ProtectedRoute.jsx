// components/ProtectedRoute.jsx
import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const { isSignedIn, user } = useUser();
  const location = useLocation();

  // If not signed in → go to sign in
  if (!isSignedIn) return <Navigate to="/" state={{ from: location }} replace />;

  // If missing metadata → go to /setup (except if already on /setup)
  const year = user?.publicMetadata?.year;
  const branch = user?.publicMetadata?.branch;

  if (!year || !branch) {
    if (location.pathname !== "/setup") {
      return <Navigate to="/setup" replace />;
    }
  }

  return <Outlet />;
}
