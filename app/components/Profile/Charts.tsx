import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface StackedAreaChartProps {
  data: {
    name: string;
    courses: number;
    projects: number;
    challenges: number;
  }[];
}
  
function StackedAreaChart({ data }: StackedAreaChartProps) {
  const chartColors = {
    courses: "#4CAF50", // Green
    projects: "#2196F3", // Blue
    challenges: "#FF9800", // Orange
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              color: "#333",
            }}
          />
          <Legend
            wrapperStyle={{
              paddingTop: "10px",
              color: "#333",
            }}
          />
          <Area
            type="monotone"
            dataKey="courses"
            stackId="1"
            stroke={chartColors.courses}
            fill={chartColors.courses}
            name="Courses"
          />
          <Area
            type="monotone"
            dataKey="projects"
            stackId="1"
            stroke={chartColors.projects}
            fill={chartColors.projects}
            name="Projects"
          />
          <Area
            type="monotone"
            dataKey="challenges"
            stackId="1"
            stroke={chartColors.challenges}
            fill={chartColors.challenges}
            name="Challenges"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StackedAreaChart;
