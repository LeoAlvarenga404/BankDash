import { SidebarItem } from "./sidebar-item";
import { HiHome, HiCreditCard } from "react-icons/hi";
import { FaMoneyBillTransfer, FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: HiHome,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: FaMoneyBillTransfer,
  },
  {
    title: "Accounts",
    url: "/accounts",
    icon: FaUser,
  },
  {
    title: "Investments",
    url: "/investments",
    icon: FaMoneyBillTrendUp,
  },
  {
    title: "Credit Cards",
    url: "/credit-cards",
    icon: HiCreditCard,
  },
  {
    title: "Loans",
    url: "/loans",
    icon: GiReceiveMoney,
  },
  {
    title: "Services",
    url: "/services",
    icon: MdWorkHistory,
  },
  {
    title: "Setting",
    url: "/settings",
    icon: IoMdSettings,
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex flex-col gap-7 border-r border-zinc-100 w-64 min-h-screen">
      <div className="p-8 pt-4">
        <img src={logo} alt="logo" />
      </div>
      {items.map((item) => {
        const isActive = location.pathname === item.url;
        return (
          <div key={item.title}>
            <SidebarItem
              icon={<item.icon />}
              title={item.title}
              url={item.url}
              isActive={isActive}
            />
          </div>
        );
      })}
    </div>
  );
}
