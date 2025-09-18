import { useEffect } from "react";
import { useGetVideos } from "../hooks/requests/useGetVideos";
import { changeShowcaseStore } from "../store/showStore";
import VideoCards from "./ui/VideoCards";
import { Skeleton } from "antd";
import { useCategoryStore } from "../store/useCategoryStore";

const Showcase = () => {
  const { isOpen } = changeShowcaseStore();
  const { data, isSuccess, isPending } = useGetVideos();
  const { activeCategoryId } = useCategoryStore();

  useEffect(() => {
    // console.log(categoryData?.data.data);
    console.log("yaxshi");

    // console.log(activeCategoryId);

    // if (isSuccess) {
    //   console.log(data?.data.videos);
    // }
  }, [isSuccess, data, activeCategoryId]);

  return (
    <div
      className={!isOpen ? `grid grid-cols-3 gap-2` : `grid grid-cols-4 gap-2`}
    >
      {/* ⏳ Agar hali data kelmagan bo‘lsa Skeleton chiqaramiz */}
      {isPending &&
        Array.from({ length: isOpen ? 8 : 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            {/* Thumbnail skeleton */}
            <Skeleton.Image
              active
              style={{ width: "100%", height: 220, borderRadius: 8 }}
            />
            {/* Text skeleton */}
            <Skeleton
              active
              title={{ width: "90%" }}
              paragraph={{ rows: 1, width: ["80%", "60%"] }}
            />
          </div>
        ))}

      {/* ✅ Agar data kelsa VideoCards larni render qilamiz */}
      {isSuccess &&
        data?.data.videos.map((video: any) => (
          <VideoCards
            key={video.id}
            {...{
              ...video,
              channelName: video.author.channelName,
              channelBanner: video.author.avatar,
            }}
          />
        ))}
    </div>
  );
};

export default Showcase;
