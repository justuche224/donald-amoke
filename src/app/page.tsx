import { ArrowRightIcon } from "lucide-react";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import skillsData from "@/data/skills.json";
import SkillsShowcase from "@/components/skills-showcase";
import Hero from "@/components/hero";

export default function Home() {
  const LIMIT = 4;
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <Hero />
      <section id="skills" className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        <SkillsShowcase skills={skillsData.skill} />
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
