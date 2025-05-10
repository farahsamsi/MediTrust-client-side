import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { refetch, data: currentUser } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);
      // console.log(res);
      return res.data;
    },
  });
  return [currentUser, refetch];
};

export default useUser;
