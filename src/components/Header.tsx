import { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Icon from "../components/ui/Icons";
import { authStore } from "../store/authStore";
import { changeShowcaseStore } from "../store/showStore";

export default function Header() {
  const { toggle, isOpen } = changeShowcaseStore();
  const [data, setData] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const authToggle = authStore((state) => state.authToggle);

  const handleClick = () => {
    window.location.href = `${
      import.meta.env.VITE_API_BACKEND_URL
    }/auth/google`;
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BACKEND_URL}/auth/me`,
          {
            credentials: "include",
          }
        );
        const userData = await res.json();
        if (userData) {
          authToggle();
        }
        setData(userData.data?.name || null);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    isOpen ? toggle(false) : toggle(true);
  };

  return (
    <header
      className={`w-full sticky top-0 z-40 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="con top-0 h-[56px] w-full flex items-center justify-between">
        <div className="header-left flex items-center gap-2">
          <button onClick={handleToggle}>
            <HiMiniBars3 />
          </button>
          <Link to="/" className="text-[black] flex items-center gap-1">
            <Icon.youTubeIcon />
            <span className="font-bold font-poppins">YouTube</span>
          </Link>
        </div>

        <div className="header-center flex items-center gap-4">
          <div className="flex items-center overflow-hidden ">
            <input
              type="text"
              placeholder="Search"
              className="w-[540px] placeholder:text-[20px] outline-[#065FD4] border-[#d3d3d3] h-[35px] border p-[10px_4px_11px_17px] rounded-[40px_0px_0px_40px]"
            />
            <div className="border w-[64px] h-[35px] border-[#d3d3d3] rounded-[0px_40px_40px_0px] flex items-center justify-center">
              <IoSearchOutline />
            </div>
          </div>
          <div>
            <Icon.microPhoneIcon />
          </div>
        </div>

        <div className="header-right">
          <div className="flex items-center gap-2">
            <div className={data ? `hidden` : `block`}>
              <Icon.headerSettings />
            </div>

            <button onClick={handleClick} className={data ? `hidden` : `block`}>
              <div className="w-[102px] h-[36px] rounded-[20px] border border-[#d3d3d3] flex items-center justify-center gap-1.5">
                <Icon.defaultUserLogin />
                <span className="text-[14px] text-[#065FD4] font-bold">
                  Sign In
                </span>
              </div>
            </button>

            <button
              className={
                data
                  ? ` flex items-center gap-1 text-[17px] border rounded-md px-2  hover:bg-[#cfcfcf61] `
                  : `hidden`
              }
            >
              <GoPlus className="size-4" />
              <span>Создать</span>
            </button>

            <div className={data ? `block` : `hidden`}>
              <FaRegBell />
            </div>

            <div
              className={
                data
                  ? `info border w-[40px] h-[36px] bg-[purple] text-white rounded-full text-[20px] flex items-center justify-center`
                  : "hidden"
              }
            >
              <span>{data?.slice(0, 1) || "?"}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
