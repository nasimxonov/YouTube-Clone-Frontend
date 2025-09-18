import { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import moment from "moment";

interface Props {
  createdAt: Date | string;
  thumbnail: string;
  viewsCount: number;
  title: string;
  duration: number;
  channelBanner: string;
  channelName: string;
}

const AlbumCards = ({
  createdAt,
  thumbnail,
  viewsCount,
  title,
  duration,
  channelName,
}: Props) => {
  const [hover, setHover] = useState(false);

  // duration ni mm:ss formatga o‘tkazib beramiz
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div
      className="flex gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Thumbnail qismi */}
      <div className="relative w-[170px] min-w-[170px] h-[95px]">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={thumbnail}
          alt="Video thumbnail"
        />
        <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
          {formatDuration(duration)}
        </span>
      </div>

      {/* O'ng tarafdagi ma’lumotlar */}
      <div className="flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-[15px] font-medium text-[#0F0F0F] line-clamp-2">
          {title}
        </h3>

        {/* Kanal nomi */}
        <span className="text-[13px] text-gray-800 font-semibold mt-1">
          {channelName}
        </span>

        {/* Views va vaqt */}
        <div className="text-[12px] text-gray-600 flex items-center gap-1 mt-1">
          <span>{viewsCount.toLocaleString()} views</span>
          <span>•</span>
          <span>{moment(createdAt).fromNow()}</span>
        </div>
      </div>

      {/* Options tugmasi */}
      <TbDotsVertical
        className={`${
          hover ? "block" : "hidden"
        } absolute right-3 top-3 text-gray-600 cursor-pointer`}
      />
    </div>
  );
};

export default AlbumCards;
