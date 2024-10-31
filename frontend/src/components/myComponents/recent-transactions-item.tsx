import { FaPix, FaCreditCard, FaDollarSign } from "react-icons/fa6";

interface RecentTransactionsItemProps {
  description: string;
  amount: number;
  date: string;
  type: "pix" | "credit" | "debit";
}

function IconType(type: "pix" | "credit" | "debit") {
  switch (type) {
    case "pix":
      return (
        <div className="p-4 rounded-full bg-[#DCFAF8] flex justify-center items-center">
          <FaPix color="#16DBCC" size={24} />
        </div>
      );
    case "credit":
      return (
        <div className="p-4 rounded-full bg-[#FFF5D9] flex justify-center items-center">
          <FaCreditCard color="#FFBB38" size={24} />
        </div>
      );
    case "debit":
      return (
        <div className="p-4 rounded-full bg-[#E7EDFF] flex justify-center items-center">
          <FaDollarSign color="#396AFF" size={24} />
        </div>
      );
    default:
      return null;
  }
}

export function RecentTransactionsItem({
  amount,
  date,
  description,
  type,
}: RecentTransactionsItemProps) {
  const amountFormatted = new Intl.NumberFormat("de-DE", {
    style: "decimal",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(amount));

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4">
        {IconType(type)}
        <div className="flex flex-col">
          <h3 className="text-[#232323] text-lg font-medium">{description}</h3>
          <span className="text-[#718EBF] text-sm font-">{date}</span>
        </div>
      </div>
      <div className={`${amount >= 0 ? "text-emerald-500" : "text-red-500"}`}>
        {amount >= 0 ? "+" : "-"}${amountFormatted}
      </div>
    </div>
  );
}
