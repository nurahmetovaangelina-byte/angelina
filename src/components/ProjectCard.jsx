import React from "react";
import { IconArrowUpRight } from "./Icons.jsx";

export default function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1"
    >
      <div className={`absolute inset-x-0 top-0 h-36 ${project.accent}`} />

      <div className="relative flex min-h-[360px] flex-col justify-between gap-8">
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div
                className={
                  project.accentForeground === "light"
                    ? "text-sm text-white/65"
                    : "text-sm text-neutral-500"
                }
              >
                0{project.id} / {project.year}
              </div>
              <h3
                className={
                  project.accentForeground === "light"
                    ? "mt-2 text-2xl font-semibold text-white"
                    : "mt-2 text-2xl font-semibold text-neutral-950"
                }
              >
                {project.title}
              </h3>
            </div>
            <div className="rounded-full border border-black/10 bg-white/90 p-3 backdrop-blur transition-transform duration-300 group-hover:rotate-45">
              <IconArrowUpRight className="h-5 w-5 text-neutral-900" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-black/10 bg-white/85 px-3 py-1 text-xs font-medium text-neutral-700">
              {project.type}
            </span>
            <span className="rounded-full bg-neutral-950 px-3 py-1 text-xs font-medium text-white">Live</span>
          </div>

          <p className="max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.focus.map((item) => (
              <span key={item} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-dashed border-black/15 px-3 py-1 text-xs text-neutral-600"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm text-neutral-500">
            <span>Открыть проект</span>
            <IconArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </a>
  );
}
