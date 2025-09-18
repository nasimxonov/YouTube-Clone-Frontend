import { useQuery } from "@tanstack/react-query";
import { api } from "../../config/axios";

export const useGetOneVideo = () => {
  const { isSuccess, data, isPending } = useQuery({
    queryKey: ["get-one-video"],
    queryFn: async () => {
      return await api.get("/videos/all");
    },
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
  return { isSuccess, data, isPending };
};
