import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSeller = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { isPending: isSellerLoading, data: isSeller } = useQuery({
    queryKey: [user?.email, "isSeller"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/seller/${user.email}`);
      return res.data?.isSeller;
    },
  });

  return [isSeller, isSellerLoading];
};

export default useSeller;
