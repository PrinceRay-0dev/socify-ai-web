import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const HeroSection = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl fade-in">
            Transform Your Social Media Strategy with AI
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 fade-in">
            Analyze, optimize, and grow your social media presence with powerful
            AI-driven insights and real-time analytics.
          </p>
          <div className="mt-10 space-y-6 fade-in">
            <Search />
            <div className="flex items-center justify-center gap-4">
              <Link to="/dashboard">
                <Button className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="group"
                onClick={() => setShowDemo(true)}
              >
                Watch Demo
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showDemo} onOpenChange={setShowDemo}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Product Demo</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <video
              className="w-full h-full rounded-lg"
              controls
              src="/demo-video.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroSection;