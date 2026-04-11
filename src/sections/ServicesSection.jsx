import React from "react";
import { services } from "../data/portfolio.js";
import SectionTitle from "../components/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { IconBlocks, IconCode, IconLayers, IconMonitor } from "../components/Icons.jsx";

const serviceIcons = [
  <IconMonitor key="monitor" className="h-5 w-5" />,
  <IconLayers key="layers" className="h-5 w-5" />,
  <IconCode key="code" className="h-5 w-5" />,
  <IconBlocks key="blocks" className="h-5 w-5" />,
];

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <SectionTitle
        eyebrow="Что делаю"
        title="Чем могу помочь в проекте"
        text="Подключаюсь как к новым сайтам, так и к существующим проектам, которым не хватает аккуратной сборки, цельности и нормального адаптива."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((item, index) => (
          <ServiceCard key={item.title} title={item.title} text={item.text} icon={serviceIcons[index]} />
        ))}
      </div>
    </section>
  );
}
