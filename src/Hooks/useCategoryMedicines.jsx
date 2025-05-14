import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategoryMedicines = (category) => {
  const axiosPublic = useAxiosPublic();

  const { data: categoryMedicines } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      const res = await axiosPublic.get(`/medicine/${category}`);
      return res.data;
    },
  });

  return [categoryMedicines];
};

export default useCategoryMedicines;
