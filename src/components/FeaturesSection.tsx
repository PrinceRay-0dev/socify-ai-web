import { Home, BarChart3, Users } from "lucide-react";

const features = [
  {
    name: "Real-time Analytics",
    description:
      "Get instant insights into your social media performance with our real-time analytics dashboard.",
    icon: BarChart3,
  },
  {
    name: "AI-Powered Insights",
    description:
      "Leverage artificial intelligence to uncover trends and optimize your content strategy.",
    icon: Home,
  },
  {
    name: "Competitor Analysis",
    description:
      "Stay ahead of the competition with detailed competitor analysis and benchmarking.",
    icon: Users,
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary fade-in">
            Analytics Made Simple
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl fade-in">
            Everything you need to succeed on social media
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="glass-card rounded-2xl p-8 fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-x-3">
                  <div className="p-2 bg-secondary rounded-lg">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.name}</h3>
                </div>
                <p className="mt-4 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;