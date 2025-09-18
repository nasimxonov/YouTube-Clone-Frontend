import {
  PiThumbsUp,
  PiThumbsDown,
  PiShareFat,
  PiDownloadSimple,
} from "react-icons/pi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";

const VideoActions = () => {
  return (
    <div className="w-full mt-3 px-5">
      <h2 className="text-xl font-semibold mb-3">Example Video Title Here</h2>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Channel"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">Channel Name</h3>
            <p className="text-xs text-gray-500">1.2M subscribers</p>
          </div>
          <button className="ml-4 flex items-center gap-1 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:opacity-90">
            <AiOutlineBell size={18} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
            <button className="flex items-center gap-1 px-4 py-2 hover:bg-gray-200">
              <PiThumbsUp size={18} /> 12K
            </button>
            <span className="w-[1px] h-6 bg-gray-300"></span>
            <button className="flex items-center gap-1 px-4 py-2 hover:bg-gray-200">
              <PiThumbsDown size={18} />
            </button>
          </div>
          <button className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <PiShareFat size={18} /> Share
          </button>
          <button className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <PiDownloadSimple size={18} /> Download
          </button>
          <button className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <MdOutlinePlaylistAdd size={18} /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoActions;
