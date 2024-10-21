import { CreditCard } from "@/components/myComponents/credit-card";
import { Title } from "@/components/myComponents/title";
import { WeeklyActivityChartBar } from "@/components/myComponents/weekly-activity";

export function Home() {
  return (
    <div className="w-3/5">
      <Title  content="My Cards"/>
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
    <div>
    <WeeklyActivityChartBar/>
    </div>
    </div>
  );
}
