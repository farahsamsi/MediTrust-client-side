import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMedicines = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch: refetchMedicines, data: medicines } = useQuery({
    queryKey: ["medicine"],
    queryFn: async () => {
      const res = await axiosPublic.get("/medicines");
      return res.data;
    },
  });

  return [medicines, refetchMedicines];
};

export default useMedicines;
