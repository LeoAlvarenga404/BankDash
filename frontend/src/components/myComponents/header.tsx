import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

import { LuBellDot } from "react-icons/lu";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export function Header() {
  return (
    <div className="w-full h-16 border-b border-zinc-100 flex items-center justify-between p-6">
      <h2 className="text-2xl font-semibold text-titleBlue">Overview</h2>
      <div className="flex gap-8">
        <div className="relative">
          <Input
            className="pl-10 rounded-full bg-[#F5F7FA] placeholder:text-[#8BA3CB] border-0"
            placeholder="Search for something"
          />
          <CiSearch
            size={24}
            className="absolute top-1.5 left-3 text-[#8BA3CB]"
          />
        </div>
        <div className="p-2 bg-[#F5F7FA] rounded-full">
          <IoSettingsOutline size={24} className="text-titleBlue" />
        </div>
        <div className="p-2 bg-[#F5F7FA] rounded-full">
          <LuBellDot size={24} className="text-[#FE5C73]" />
        </div>
        <Avatar className="scale-125">
          <AvatarImage src={"https://github.com/LeoAlvarenga404.png"} />
        </Avatar>
      </div>
    </div>
  );
}
