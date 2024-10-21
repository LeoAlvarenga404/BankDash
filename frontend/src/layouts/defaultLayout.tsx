import { Header } from "@/components/myComponents/header";
import { Sidebar } from "@/components/myComponents/sidebar";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div className="min-h-screen w-screen flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <Header />
        <div className="bg-[#f5f7fa] h-full px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
