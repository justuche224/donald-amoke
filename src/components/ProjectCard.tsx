import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/schemas";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import Icon from "./Icon";
import { ExternalLink, Sparkles } from "lucide-react";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, href, description, images, tags, links } = project;

  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-30"></div>

      <Card className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        <CardHeader className="relative p-0">
          {images && images.length > 0 && (
            <div className="relative overflow-hidden">
              <Link
                href={href || images[0]}
                className="block relative group/image"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100"></div>

                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-all duration-300 group-hover/image:opacity-100">
                  <div className="rounded-full bg-white/20 backdrop-blur-sm p-3 transform scale-75 transition-transform duration-300 group-hover/image:scale-100">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                </div>

                <Image
                  src={images[0] || "/placeholder.svg"}
                  alt={name}
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover object-top transition-transform duration-500 group-hover/image:scale-105"
                />

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover/image:translate-x-full"></div>
              </Link>
            </div>
          )}
        </CardHeader>

        <CardContent className="relative flex flex-col gap-3 p-6">
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {name}
            </CardTitle>
            <Sparkles className="h-4 w-4 text-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <div className="relative">
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-gray-300 dark:prose-invert prose-p:leading-relaxed">
              {description}
            </Markdown>
          </div>
        </CardContent>

        <CardFooter className="relative flex h-full flex-col items-start justify-between gap-4 p-6 pt-0">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.toSorted().map((tag, index) => (
                <Badge
                  key={tag}
                  className="relative overflow-hidden border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1 text-xs font-medium text-purple-800 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/40 hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white hover:shadow-lg hover:shadow-purple-500/25"
                  variant="secondary"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 hover:translate-x-full"></div>
                  <span className="relative">{tag}</span>
                </Badge>
              ))}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-2">
              {links.toSorted().map((link, idx) => (
                <Link
                  href={link?.href}
                  key={idx}
                  target="_blank"
                  className="group/link"
                >
                  <Badge className="relative overflow-hidden border border-blue-500/30 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 px-3 py-2 text-xs font-medium text-blue-200 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:from-blue-500/25 hover:to-cyan-500/25 hover:text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105">
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover/link:translate-x-full"></div>

                    <div className="relative flex items-center gap-2">
                      <Icon
                        name={link.icon}
                        className="h-3 w-3 transition-transform duration-300 group-hover/link:scale-110"
                      />
                      <span>{link.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0.5" />
                    </div>
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      </Card>
    </div>
  );
}
