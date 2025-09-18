import { useGetVideos } from "../../hooks/requests/useGetVideos";
import AlbumCards from "./AlbumCards";
import { Skeleton } from "antd";

const Album = () => {
  const { data, isPending, isSuccess } = useGetVideos();

  return (
    <div className="right h-[500px]  overflow-y-auto w-full mt-2 mb-1">
      <div className=" flex flex-col gap-y-1 w-full">
        {/* Skeleton loader */}
        {isPending &&
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-2 bg-white rounded-lg shadow-sm">
              <Skeleton.Image active style={{ width: "100%", height: 180 }} />
              <Skeleton active title paragraph={{ rows: 2 }} />
            </div>
          ))}

        {/* ✅ Data kelsa AlbumCards lar */}
        {isSuccess &&
          data?.data.videos.map((video: any) => (
            <AlbumCards
              key={video.id}
              createdAt={video.createdAt}
              thumbnail={video.thumbnail}
              viewsCount={video.viewsCount}
              title={video.title}
              duration={video.duration}
              channelName={video.author.channelName}
              channelBanner={video.author.avatar}
            />
          ))}
      </div>
    </div>
  );
};

export default Album;
