import { Link } from "react-router-dom";
import { changeShowcaseStore } from "../../store/showStore";
import moment from "moment";
import { FaUserCircle } from "react-icons/fa";

interface VideoProps {
  id: string;
  createdAt: Date | string;
  thumbnail: string;
  viewsCount: number;
  title: string;
  duration: number;
  channelBanner: string;
  channelName: string;
}

function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  if (h > 0) {
    return [
      h,
      m.toString().padStart(2, "0"),
      s.toString().padStart(2, "0"),
    ].join(":");
  }
  return [m, s.toString().padStart(2, "0")].join(":");
}

const VideoCards = ({
  id,
  thumbnail,
  duration,
  title,
  channelBanner,
  channelName,
  viewsCount,
  createdAt,
}: VideoProps) => {
  const isOpen = changeShowcaseStore((state) => state.isOpen);

  return (
    <div
      className={`video-cards flex flex-col gap-2  
      ${!isOpen ? "w-[415px]" : "w-[350px]"} `}
    >
      <Link to={`video/${id}`}>
        <div className="card-top relative w-full h-[220px]">
          <img
            className="w-full h-full object-cover rounded-lg "
            src={thumbnail}
            alt="Video thumbnail"
          />
          <span className="absolute bottom-1 right-1 bg-black text-white rounded-sm px-1 text-xs">
            {formatDuration(duration)}
          </span>
        </div>
      </Link>

      <div className="card-bottom flex items-start gap-2">
        {/* Channel Avatar */}
        <div className="bottom-left min-w-[28px] h-[28px] rounded-full overflow-hidden">
          {channelBanner ? (
            <img
              className="w-full h-full object-cover"
              src={channelBanner}
              alt="Channel avatar"
            />
          ) : (
            <FaUserCircle className="w-[30px] h-[30px]" />
          )}
        </div>

        <div className="bottom-right flex flex-col overflow-hidden leading-tight">
          <span className="text-[14px] text-[#0F0F0F] font-medium line-clamp-2">
            {title}
          </span>
          <span className="text-[12px] text-[#606060]">{channelName}</span>
          <div className="flex items-center gap-1 text-[12px] text-[#606060]">
            <span>{viewsCount} views</span>
            <span>• {moment(createdAt).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
