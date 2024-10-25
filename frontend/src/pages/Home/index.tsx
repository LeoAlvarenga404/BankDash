import { CreditCard } from "@/components/myComponents/credit-card";
import { RecentTransactionsItem } from "@/components/myComponents/recent-transactions-item";
import { Title } from "@/components/myComponents/title";
import { WeeklyActivityChartBar } from "@/components/myComponents/weekly-activity";

export function Home() {
  return (
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
      <RecentTransactionsItem amount={123.50} date={'12-04-2004 12:59'} description="Aposta no tigrinho" type="pix"/>
    </div>
  );
}
