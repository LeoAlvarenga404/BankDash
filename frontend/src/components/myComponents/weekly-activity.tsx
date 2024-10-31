"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { day: "Saturday", withdraw: 186, diposit: 80 },
  { day: "Sunday", withdraw: 305, diposit: 200 },
  { day: "Monday", withdraw: 237, diposit: 120 },
  { day: "Tuesday", withdraw: 73, diposit: 190 },
  { day: "Wednesday", withdraw: 209, diposit: 130 },
  { day: "Thuesday", withdraw: 214, diposit: 140 },
  { day: "Friday", withdraw: 214, diposit: 140 },
];

const chartConfig = {
  withdraw: {
    label: "Withdraw",
    color: "#2D60FF",
  },
  diposit: {
    label: "Diposit",
    color: "#16DBCC",
  },
} satisfies ChartConfig;

export function WeeklyActivityChartBar() {
  const now = new Date();
  const month = now.getMonth();

  const months = [
    "Januay",
    "Febuary",
    "March",
    "April",
    "May",
    "Juny",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between">
        <div className="">
          <CardTitle>Withdraws and Diposits</CardTitle>
          <CardDescription>{months[month]}</CardDescription>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-primaryBlue "></div>
            <span className="opacity-70">{chartConfig.withdraw.label}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-secondaryBlue "></div>
            <span className="opacity-70">{chartConfig.diposit.label}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="w-full h-52">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            barCategoryGap={20}
            barGap={20}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="withdraw" fill="var(--color-withdraw)" radius={99} />
            <Bar dataKey="diposit" fill="var(--color-diposit)" radius={99} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
