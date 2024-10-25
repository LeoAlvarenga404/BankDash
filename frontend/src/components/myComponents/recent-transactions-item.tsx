import { FaPix, FaCreditCard, FaDollarSign } from "react-icons/fa6";

interface RecentTransactionsItemProps {
  description: string;
  amount: number;
  date: string;
  type: "pix" | "credit" | "debit";
}

export function RecentTransactionsItem({
  amount,
  date,
  description,
  type,
}: RecentTransactionsItemProps) {
  return (
    <div>
      <div>{amount}</div>
      <div>{description}</div>
      <div>{type}</div>
      <div>{date}</div>
    </div>
  );
}
