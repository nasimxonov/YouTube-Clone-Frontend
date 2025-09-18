import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../index.css";

function RootLayout() {
  return (
    <>
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="sticky top-[56px] mycon">
          <Sidebar />
        </div>

        {/* Main */}
        <section className="flex-1 flex flex-col ml-3">
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default RootLayout;
