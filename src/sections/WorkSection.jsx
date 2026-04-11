import React from "react";
import { projects } from "../data/portfolio.js";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Selected work"
          title="Несколько моих проектов."
          text="Здесь только живые работы. Их можно открыть, посмотреть структуру, ритм блоков, адаптивность и общее ощущение от реализации."
        />
        <div className="rounded-[1.5rem] border border-black/10 bg-white px-5 py-4 text-sm leading-7 text-neutral-600 shadow-sm lg:max-w-sm">
          Здесь собраны разные по настроению и задаче проекты
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
