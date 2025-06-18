"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, FileDown, Globe, MapPinned, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-sm animate-pulse"></div>

        <Image
          className={`relative rounded-full aspect-square object-cover border-2 border-white/20 shadow-2xl transition-all duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          } group-hover:scale-105 group-hover:border-white/40`}
          src="/me.jpg"
          alt="Photo of Donald"
          width={175}
          height={175}
          priority
        />

        <div className="absolute -top-2 -right-2 p-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg animate-bounce">
          <Code className="h-4 w-4 text-white" />
        </div>
        <div
          className="absolute -bottom-2 -left-2 p-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          <Globe className="h-4 w-4 text-white" />
        </div>
        <div
          className="absolute top-1/2 -right-4 p-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <Zap className="h-3 w-3 text-white" />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="title text-5xl">Hi I&apos;m Donald</h1>
        <p className="mt-4 font-light text-lg">
          <span className="font-bold">Full-Stack</span> developer from{" "}
          <span className="font-bold">Nigeria</span>
        </p>
        <p className="mt-2 font-light text-lg">
          I&apos;m a <span className="font-bold">JavaScript/TypeScript</span>{" "}
          dev that prioritize functionality and usability.
        </p>
        <div className="mt-4 flex items-end gap-1">
          <Badge variant="secondary" className="mb-6 animate-fade-in">
            <MapPinned className="h-3 w-3 mr-1" />
            Abuja Nigeria
          </Badge>
        </div>
        <section className="mt-8 flex items-center gap-8">
          <Link href="/resume.pdf" target="_blank">
            <Button variant="secondary" className="flex items-center">
              <span className="font-semibold">Resume</span>
              <FileDown className="ml-2 size-5" />
            </Button>
          </Link>
          <Socials />
        </section>
      </div>
    </section>
  );
}
