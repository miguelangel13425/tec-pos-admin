import { useState } from "react";
import { Card, Grid, Tab, TabList, Text, Title,Flex,Metric,ProgressBar,BadgeDelta,AreaChart,
    
    Icon,
    Toggle,
    ToggleItem, } from "@tremor/react";

    export const performance = [
        {
          date: "2021-01-01",
          Sales: 900.73,
          Profit: 173,
          Customers: 73,
        },
        {
          date: "2021-01-02",
          Sales: 1000.74,
          Profit: 174.6,
          Customers: 74,
        },
        // ...
        {
          date: "2021-03-13",
          Sales: 882,
          Profit: 682,
          Customers: 682,
        },
      ];


 

export default function ChartView() {
  const [selectedKpi, setSelectedKpi] = useState("Sales");
  const [selectedView, setSelectedView] = useState("1");
  const dollarFormatter = (value: number) =>
  `$ ${Intl.NumberFormat("us").format(value).toString()}`;

    const numberFormatter = (value: number) =>
  `${Intl.NumberFormat("us").format(value).toString()}`;
  // map formatters by selectedKpi
  const formatters: { [key: string]: any } = {
    Sales: dollarFormatter,
    Profit: dollarFormatter,
    Customers: numberFormatter,
  };
  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Detail" />
      </TabList>

      {selectedView === "1" ? (
        <>
          <Flex alignItems="center" className="mt-6 gap-6">
          <Card className="max-w-lg">
      <Flex alignItems="start">
        <div>
          <Text>Sales</Text>
          <Metric>$ 12,699</Metric>
        </div>
        <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
      </Flex>
      <Flex className="mt-4">
        <Text className="truncate">68% ($ 149,940)</Text>
        <Text> $ 220,500 </Text>
      </Flex>
      <ProgressBar percentageValue={15.9} className="mt-2" />
    </Card>
    <Card className="max-w-lg">
      <Flex alignItems="start">
        <div>
          <Text>Sales</Text>
          <Metric>$ 12,699</Metric>
        </div>
        <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
      </Flex>
      <Flex className="mt-4">
        <Text className="truncate">68% ($ 149,940)</Text>
        <Text> $ 220,500 </Text>
      </Flex>
      <ProgressBar percentageValue={15.9} className="mt-2" />
    </Card>
    <Card className="max-w-lg">
      <Flex alignItems="start">
        <div>
          <Text>Sales</Text>
          <Metric>$ 12,699</Metric>
        </div>
        <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
      </Flex>
      <Flex className="mt-4">
        <Text className="truncate">68% ($ 149,940)</Text>
        <Text> $ 220,500 </Text>
      </Flex>
      <ProgressBar percentageValue={15.9} className="mt-2" />
    </Card>
          </Flex>

          <div className="mt-6">
          <AreaChart
        data={performance}
        index="date"
        categories={[selectedKpi]}
        colors={["blue"]}
        showLegend={false}
        valueFormatter={formatters[selectedKpi]}
        yAxisWidth={56}
        className="h-96 mt-8"
      />
          </div>
        </>
      ) : (
        <Card className="mt-6">
          <div className="h-96" />
        </Card>
      )}
    </main>
  );
}