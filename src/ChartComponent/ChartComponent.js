import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 3],
    ["Watch TV", 1],
    ["Sleep", 7],
    ];
    
    export const options = {
    title: "My Daily Activities",
    };
    
    export default function ChartComponent() {
    return (
    <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"100%"}
    height={"400px"}
    />
    );
    }
    
