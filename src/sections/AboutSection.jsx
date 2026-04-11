import React from "react";
import { strengths } from "../data/portfolio.js";
import SectionTitle from "../components/SectionTitle.jsx";
import { IconCode, IconGlobe, IconLayers, IconMonitor } from "../components/Icons.jsx";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <SectionTitle
          eyebrow="Обо мне"
          title="Мне нравится делать сайты, которые выглядят спокойно и аккуратно."
          text="Умею быстро собирать страницы, добавлять новые разделы, править существующую вёрстку и доводить интерфейс до ровного, аккуратного результата. В работе ценю понятный план, сроки и регулярную обратную связь — чтобы проект двигался спокойно и предсказуемо."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item, index) => {
            const icons = [
              <IconCode key="code" className="h-5 w-5" />,
              <IconMonitor key="monitor" className="h-5 w-5" />,
              <IconGlobe key="globe" className="h-5 w-5" />,
              <IconLayers key="layers" className="h-5 w-5" />,
            ];

            return (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-black/10 bg-white p-5 shadow-[0_20px_70px_-50px_rgba(0,0,0,0.24)]"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-neutral-100 p-3 text-neutral-900">{icons[index]}</div>
                <h3 className="text-lg font-semibold text-neutral-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
