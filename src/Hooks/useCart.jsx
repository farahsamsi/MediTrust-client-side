import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // tanstack query
  const {
    isLoading: cartIsLoading,
    refetch,
    data: cart = [],
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      // const res = await axiosSecure.get(`/carts?email=user@meditrust.com`);
      return res.data;
    },
  });
  return [cart, refetch, cartIsLoading];
};

export default useCart;
