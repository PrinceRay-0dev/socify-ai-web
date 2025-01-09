import { Activity, TrendingUp, Users, MessageSquare, Share2, Target } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Card } from "@/components/ui/card";

const performanceData = [
  { month: "Jan", engagement: 4000, followers: 2400, impressions: 2400 },
  { month: "Feb", engagement: 3000, followers: 1398, impressions: 2210 },
  { month: "Mar", engagement: 2000, followers: 9800, impressions: 2290 },
  { month: "Apr", engagement: 2780, followers: 3908, impressions: 2000 },
  { month: "May", engagement: 1890, followers: 4800, impressions: 2181 },
  { month: "Jun", engagement: 2390, followers: 3800, impressions: 2500 },
];

const sentimentData = [
  { name: "Positive", value: 65 },
  { name: "Neutral", value: 25 },
  { name: "Negative", value: 10 },
];

const Analytics = () => {
  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold fade-in">Social Media Analytics</h1>
          <div className="flex gap-4">
            <select className="px-4 py-2 rounded-lg border bg-background">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 glass-card">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Followers</p>
                <h3 className="text-2xl font-bold">24.5K</h3>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 glass-card">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Engagement Rate</p>
                <h3 className="text-2xl font-bold">5.2%</h3>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 glass-card">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Share Rate</p>
                <h3 className="text-2xl font-bold">3.8%</h3>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 glass-card">
            <h3 className="text-xl font-semibold mb-4">Engagement Overview</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="engagement"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="followers"
                    stroke="hsl(var(--secondary))"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6 glass-card">
            <h3 className="text-xl font-semibold mb-4">Sentiment Analysis</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sentimentData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <Card className="p-6 glass-card">
          <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <span className="font-medium">Best Performing Post</span>
              </div>
              <p className="text-sm text-muted-foreground">
                "Launch of our new feature" - 15K impressions
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span className="font-medium">Most Comments</span>
              </div>
              <p className="text-sm text-muted-foreground">
                "Community Update" - 234 comments
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-primary" />
                <span className="font-medium">Most Shares</span>
              </div>
              <p className="text-sm text-muted-foreground">
                "Industry Insights" - 89 shares
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="font-medium">Growth Rate</span>
              </div>
              <p className="text-sm text-muted-foreground">
                8.1% increase this month
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;