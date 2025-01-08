import { Activity, Users, TrendingUp, Eye } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 fade-in">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Followers"
            value="24.5K"
            icon={<Users className="h-6 w-6" />}
            trend={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="Engagement Rate"
            value="5.2%"
            icon={<Activity className="h-6 w-6" />}
            trend={{ value: 2.1, isPositive: true }}
          />
          <MetricCard
            title="Growth Rate"
            value="8.1%"
            icon={<TrendingUp className="h-6 w-6" />}
            trend={{ value: 1.2, isPositive: false }}
          />
          <MetricCard
            title="Total Impressions"
            value="127.8K"
            icon={<Eye className="h-6 w-6" />}
            trend={{ value: 15, isPositive: true }}
          />
        </div>

        <div className="glass-card rounded-lg p-6 fade-in">
          <h2 className="text-xl font-semibold mb-4">Engagement Overview</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;