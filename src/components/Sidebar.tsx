import { Button, Layout, Menu } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { authStore } from "../store/authStore";
import { changeShowcaseStore } from "../store/showStore";
import Icon from "./ui/Icons";

const { Sider } = Layout;

// Full menu (open sidebar)
const MenuItems = [
  {
    key: "1",
    icon: <Icon.sidebarHome />,
    style: { padding: "10px 16px", margin: "4px 0", gap: "6px" },
    label: "Home",
  },
  {
    key: "2",
    icon: <Icon.sidebarShorts />,
    style: { padding: "10px 16px", margin: "4px 0", gap: "6px" },
    label: "Shorts",
  },
  {
    key: "3",
    icon: <Icon.sidebarSubscriptions />,
    style: { padding: "10px 16px", margin: "4px 0", gap: "6px" },
    label: "Subscriptions",
  },
  { type: "divider" as const },
  {
    key: "4",
    icon: <Icon.sidebarLibrary />,
    style: { padding: "10px 16px", margin: "4px 0", gap: "6px" },
    label: "Library",
  },
  {
    key: "5",
    icon: <Icon.sidebarHistory />,
    style: { padding: "10px 16px", margin: "4px 0", gap: "6px" },
    label: "History",
  },
  { type: "divider" as const },
];

// Explore bo‘limi
const ExploreItems = [
  {
    key: "6",
    icon: <Icon.sidebarTrending />,
    style: { padding: "10px 16px", margin: "4px 0", gap: "6px" },
    label: "Trending",
  },
  {
    key: "8",
    icon: <Icon.sidebarMusic />,
    style: { padding: "10px 16px", margin: "4px 0", gap: "6px" },
    label: "Music",
  },
  {
    key: "9",
    icon: <Icon.sidebarMovies />,
    style: { padding: "10px 16px", margin: "4px 0", gap: "6px" },
    label: "Movies & TV",
  },
  {
    key: "10",
    icon: <Icon.sidebarLive />,
    style: { padding: "10px 16px", margin: "4px 0", gap: "6px" },
    label: "Live",
  },
  {
    key: "11",
    icon: <Icon.sidebarGaming />,
    style: { padding: "10px 16px", margin: "4px 0", gap: "6px" },
    label: "Gaming",
  },
  {
    key: "12",
    icon: <Icon.sidebarNews />,
    style: { padding: "10px 16px", margin: "4px 0", gap: "6px" },
    label: "News",
  },
];

export default function Sidebar() {
  const { isOpen, toggle } = changeShowcaseStore();
  const open = authStore((state) => state.isOpen);

  const location = useLocation();
  const video = location.pathname.split("/")[1];

  useEffect(() => {
    toggle(false);
  }, []);

  return (
    <Sider
      className={`!bg-[#fff] ${
        video == "video" && isOpen == true ? "hidden" : "block"
      } `}
      trigger={null}
      collapsible
      collapsed={isOpen}
      width={240}
    >
      {/* Main Menu */}
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={isOpen ? MenuItems : MenuItems}
      />

      {/* Agar sidebar ochiq bo‘lsa, Sign in + Explore chiqsin */}
      {!isOpen && (
        <>
          {/* Sign in section */}
          <div
            className={
              open ? `px-4 py-3 border-y text-sm text-gray-700` : "hidden"
            }
          >
            <p className="mb-2 text-[14px]">
              Sign in to like videos, comment, and subscribe.
            </p>
            <Button type="default" icon={<Icon.defaultUserLogin />}>
              Sign in
            </Button>
          </div>

          {/* Explore Menu */}
          <Menu
            theme="light"
            mode="inline"
            selectable={false}
            items={[
              {
                type: "group" as const,
                label: "Explore",
                children: ExploreItems,
              },
            ]}
          />
        </>
      )}
    </Sider>
  );
}
