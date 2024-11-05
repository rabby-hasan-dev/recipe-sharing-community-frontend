"use client";
import {
  Tooltip as RechartsTooltip,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "next-themes"; // For light and dark mode switching

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 600 },
  { name: "Mar", users: 700 },
  { name: "Apr", users: 500 },
];

const Graph = () => {
  const { theme } = useTheme(); // Detects the current theme (light or dark)

  // Define colors based on the theme
  const isDarkMode = theme === "dark";
  const lineColor = isDarkMode ? "#63b3ed" : "#8884d8"; // Blue in dark mode, purple in light mode
  const gridColor = isDarkMode ? "#2D3748" : "#e0e0e0"; // Dark grid in dark mode, light grid in light mode
  const axisColor = isDarkMode ? "#CBD5E0" : "#4A5568"; // Lighter labels for dark mode

  return (
    <ResponsiveContainer height={300} width="100%">
      <LineChart data={data}>
        <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke={axisColor} />
        <YAxis stroke={axisColor} />
        <RechartsTooltip
          contentStyle={{
            backgroundColor: isDarkMode ? "#1A202C" : "#fff", // Dark background for tooltip in dark mode
            borderColor: isDarkMode ? "#4A5568" : "#e0e0e0",
            color: isDarkMode ? "#E2E8F0" : "#000", // Light text in dark mode
          }}
        />
        <Line
          dataKey="users"
          stroke={lineColor}
          strokeWidth={2}
          type="monotone"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
