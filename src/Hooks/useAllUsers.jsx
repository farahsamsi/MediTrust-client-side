import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch: refetchUsers, data: allUsers = [] } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUsers");
      return res.data;
    },
  });

  return [allUsers, refetchUsers];
};

export default useAllUsers;
