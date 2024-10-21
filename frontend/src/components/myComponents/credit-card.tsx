import { ChipCard } from "./chip-card";
import masterCard from "@/assets/mastercard.svg";

interface CreditCardProps {
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}

export function CreditCard({
  balance,
  cardHolder,
  validThru,
  cardNumber,
}: CreditCardProps) {
  const censoredCardNumber = cardNumber
    .split(" ")
    .map((part, index) => (index === 1 || index === 2 ? "****" : part))
    .join(" ");

  return (
    <div className="w-full bg-gradient-to-br from-[#4C49ED] to-[#0A06F4]  rounded-3xl text-white">
      <header className="flex justify-between p-6">
        <div>
          <p className="text-sm">Balance</p>
          <span className="text-2xl">${balance}</span>
        </div>
        <ChipCard theme="light" />
      </header>
      <main className="px-6 pb-6 flex">
        <div className="flex flex-col w-full text-sm">
          <h4 className="text-white/60">CARD HOLDER</h4>
          <span>{cardHolder}</span>
        </div>
        <div className="flex flex-col w-full text-sm">
          <h4 className="text-white/60">VALID THRU</h4>
          <span>{validThru}</span>
        </div>
      </main>
      <footer className="flex justify-between items-center bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] px-6 py-4 rounded-b-3xl ">
        <h2 className="text-2xl">{censoredCardNumber}</h2>
        <img src={masterCard} alt="" />
      </footer>
    </div>
  );
}
