import { useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useSeller from "../Hooks/useSeller";

const SellerRoutes = ({ children }) => {
  const [isSeller, isSellerLoading] = useSeller();
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading || isSellerLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-ring text-secondary w-xl"></span>
      </div>
    );
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoutes;
