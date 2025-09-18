import { useQuery } from "@tanstack/react-query";
import { api } from "../../config/axios";
import { useCategoryStore } from "../../store/useCategoryStore";

export const useGetVideos = () => {
  const { activeCategoryId } = useCategoryStore();

  const { isSuccess, data, isPending } = useQuery({
    queryKey: ["get-all-videos", activeCategoryId],
    queryFn: async () => {
      return await api.get(
        `/video/feed/videos?limit=${20}&page=${1}&categoryId=${activeCategoryId}`
      );
    },
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
  return { isSuccess, data, isPending };
};
