import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: ReactNode;
  title: string;
  url: string;
  isActive: boolean;
}

export function SidebarItem({ icon, title, url, isActive }: SidebarItemProps) {
  return (
    <Link to={url}>
      <div
        className={`flex gap-4 items-center px-8 relative ${
          isActive ? "text-primaryBlue" : "text-zinc-400"
        }`}
      >
        <div
          className={`absolute h-14 w-1.5 bg-primaryBlue left-0 rounded-tr-full rounded-br-full ${
            isActive ? "flex" : "hidden"
          }`}
        ></div>
        <div className="text-3xl">{icon}</div>
        <span className="text-base">{title}</span>
      </div>
    </Link>
  );
}
