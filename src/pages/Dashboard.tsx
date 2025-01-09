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
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    instagram: 400,
    facebook: 300,
    twitter: 200,
    linkedin: 150,
  },
  {
    name: "Feb",
    instagram: 300,
    facebook: 400,
    twitter: 250,
    linkedin: 200,
  },
  {
    name: "Mar",
    instagram: 600,
    facebook: 500,
    twitter: 300,
    linkedin: 250,
  },
  {
    name: "Apr",
    instagram: 800,
    facebook: 600,
    twitter: 400,
    linkedin: 300,
  },
  {
    name: "May",
    instagram: 700,
    facebook: 650,
    twitter: 450,
    linkedin: 350,
  },
  {
    name: "Jun",
    instagram: 900,
    facebook: 800,
    twitter: 500,
    linkedin: 400,
  },
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
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="instagram"
                  stroke="#E1306C"
                  strokeWidth={2}
                  name="Instagram"
                />
                <Line
                  type="monotone"
                  dataKey="facebook"
                  stroke="#4267B2"
                  strokeWidth={2}
                  name="Facebook"
                />
                <Line
                  type="monotone"
                  dataKey="twitter"
                  stroke="#1DA1F2"
                  strokeWidth={2}
                  name="Twitter"
                />
                <Line
                  type="monotone"
                  dataKey="linkedin"
                  stroke="#0077B5"
                  strokeWidth={2}
                  name="LinkedIn"
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