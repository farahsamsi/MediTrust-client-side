import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCategories = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch: refetchCategories, data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosSecure.get("/categories");
      return res.data;
    },
  });

  return [categories, refetchCategories];
};

export default useCategories;
