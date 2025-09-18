import { useQuery } from "@tanstack/react-query";
import { api } from "../../config/axios";

export const useGetCategories = () => {
  const { isSuccess, data, isPending } = useQuery({
    queryKey: ["get-categories"],
    queryFn: async () => {
      return await api.get("categories/all");
    },
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
  return { isSuccess, data, isPending };
};
