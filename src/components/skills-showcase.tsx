"use client";

import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Sparkles, TrendingUp } from "lucide-react";

interface SkillsShowcaseProps {
  skills: string[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const featuredSkills = skills.slice(0, 10);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % featuredSkills.length);
        setIsAnimating(false);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, [featuredSkills.length]);

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 blur-3xl animate-pulse"></div>

      <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-purple-400" />
            <h3 className="text-xl font-bold text-white">Featured Skills</h3>
          </div>
          <Sparkles className="h-5 w-5 text-pink-400 animate-pulse" />
        </div>

        <div className="mb-6 text-center">
          <div
            className={`transition-all duration-300 ${
              isAnimating ? "scale-95 opacity-50" : "scale-100 opacity-100"
            }`}
          >
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-lg font-bold text-white shadow-lg shadow-purple-500/25">
              {featuredSkills[currentSkillIndex]}
            </Badge>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, index) => (
            <Badge
              key={skill}
              className={`relative overflow-hidden border transition-all duration-500 hover:scale-105 ${
                skill === featuredSkills[currentSkillIndex]
                  ? "border-purple-400/50 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white shadow-lg shadow-purple-500/25"
                  : "border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
              }`}
              variant="secondary"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 hover:translate-x-full"></div>
              <span className="relative">{skill}</span>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
