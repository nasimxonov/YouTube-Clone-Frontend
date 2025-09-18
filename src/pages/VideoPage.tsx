import { PiMusicNoteFill } from "react-icons/pi";
import Album from "../components/ui/Album-Card";
import { useParams } from "react-router-dom";
const VideoPage = () => {
  const { id } = useParams();
  console.log(
    `${import.meta.env.VITE_API_BACKEND_URL}/video/${id}/stream?quality=720p`
  );
  return (
    <div className="video-page p-3 h-full w-full max-h-[800px] flex gap-3 px-5">
      <div className="w-[70%] h-[600px] flex items-end rounded-[15px] overflow-hidden">
        <video
          width="640"
          height="360"
          controls
          style={{
            height: "580px",
            width: "100%",
            borderRadius: "15px",
          }}
        >
          <source
            src={`${
              import.meta.env.VITE_API_BACKEND_URL
            }/video/${id}/stream?quality=720p`}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="right w-[30%] border-[1px]  border-slate-300 rounded-[20px] overflow-hidden min-h-[180px] max-h-[600px]">
        <div className="w-full  p-2 text-[20px] font-poppins font-bold sticky">
          <span className="flex items-center gap-x-2">
            <PiMusicNoteFill />
            Albums
          </span>
          <span className="block text-[10px] text-[grey]">
            Mixes are playlists YouTube makes for you
          </span>
        </div>
        <Album />
      </div>
    </div>
  );
};

export default VideoPage;
