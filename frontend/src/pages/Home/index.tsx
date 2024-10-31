import { CreditCard } from "@/components/myComponents/credit-card";
import { RecentTransactionsItem } from "@/components/myComponents/recent-transactions-item";
import { Title } from "@/components/myComponents/title";
import { WeeklyActivityChartBar } from "@/components/myComponents/weekly-activity";

export function Home() {
  return (
    <div className="flex gap-8">
      <div className="w-3/5">
        <div className="flex items-center justify-between">
          <Title>My Cards</Title>
          <button className="text-base font-semibold text-[#343C6A]">
            See All
          </button>
        </div>
        <div className="flex gap-8 ">
          <CreditCard
            balance={5.756}
            cardHolder={"Eddy Cusuma"}
            validThru={"12/22"}
            cardNumber={"3778 4467 9501 1234"}
          />
          <CreditCard
            balance={5.756}
            cardHolder={"Eddy Cusuma"}
            validThru={"12/22"}
            cardNumber={"3778 4467 9501 1234"}
          />
        </div>
        <Title>Weekly Activity</Title>
        <div>
          <WeeklyActivityChartBar />
        </div>
      </div>
      <div className="w-2/5">
        <Title>Recent Transaction</Title>
        <div className="flex flex-col bg-white p-6 gap-4 rounded-3xl">
          <RecentTransactionsItem
            amount={12236.5}
            date={"28 January 2021"}
            description="Deposit from my"
            type="credit"
          />
          <RecentTransactionsItem
            amount={-300}
            date={"25 January 2021"}
            description="Deposit Paypal"
            type="pix"
          />
          <RecentTransactionsItem
            amount={1200.46}
            date={"21 January 2021"}
            description="Jemi Wilson"
            type="debit"
          />
        </div>
      </div>
    </div>
  );
}
