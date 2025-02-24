import Socials from "@/components/Socials";
import Image from "next/image";
import { ArrowRightIcon, FileDown, MapPinned } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import skillsData from "@/data/skills.json";

export default function Home() {
  const BIRTH_YEAR = 2003;
  const LIMIT = 2;
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src="/me.jpg"
          alt="Photo of Donald"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl">Hi I&apos;m Donald</h1>
          <p className="mt-4 font-light text-lg">
            {/* Update my age */}
            {new Date().getFullYear() - BIRTH_YEAR}
            -year-old <span className="font-bold">full-stack</span> developer
            from <span className="font-bold">Nigeria</span> 🇳🇬.
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
      <section id="skills" className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {skillsData.skill.map((skill: string) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>
      <section id="contact">
        <h2 className="title pb-8">Contact me.</h2>
        <ContactForm />
      </section>
    </article>
  );
}
