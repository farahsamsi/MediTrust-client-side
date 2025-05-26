import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllOrders = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch: refetchAllOrders, data: allOrders = [] } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allOrders");
      return res.data;
    },
  });

  return [allOrders, refetchAllOrders];
};

export default useAllOrders;
