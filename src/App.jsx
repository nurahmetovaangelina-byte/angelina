import React, { useEffect } from "react";
import {
  projects,
  proofPills,
  runPortfolioSanityChecks,
  services,
  strengths,
} from "./data/portfolio.js";
import ProjectCard from "./components/ProjectCard.jsx";
import SectionTitle from "./components/SectionTitle.jsx";
import ServiceCard from "./components/ServiceCard.jsx";
import {
  IconArrowUpRight,
  IconBlocks,
  IconCode,
  IconGithub,
  IconGlobe,
  IconLayers,
  IconMail,
  IconMessage,
  IconMonitor,
  IconTelegram,
} from "./components/Icons.jsx";

export default function App() {
  useEffect(() => {
    runPortfolioSanityChecks();
  }, []);

  const serviceIcons = [
    <IconMonitor key="monitor" className="h-5 w-5" />,
    <IconLayers key="layers" className="h-5 w-5" />,
    <IconCode key="code" className="h-5 w-5" />,
    <IconBlocks key="blocks" className="h-5 w-5" />,
  ];

  return (
    <div className="min-h-screen bg-[#f5f4f1] text-neutral-900">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f5f4f1]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-900">
            Angelina
          </a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
            <a href="#about" className="transition hover:text-neutral-950">
              Обо мне
            </a>
            <a href="#work" className="transition hover:text-neutral-950">
              Проекты
            </a>
            <a href="#services" className="transition hover:text-neutral-950">
              Что делаю
            </a>
            <a href="#contact" className="transition hover:text-neutral-950">
              Контакты
            </a>
          </nav>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href="https://t.me/smmnlss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-neutral-900 shadow-sm transition hover:-translate-y-0.5"
              aria-label="Telegram"
            >
              <IconTelegram className="h-5 w-5" />
            </a>
            <a
              href="mailto:angelina.fronten@gmail.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-neutral-900 shadow-sm transition hover:-translate-y-0.5"
              aria-label="Написать на почту"
            >
              <IconMail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/nurahmetovaangelina-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-neutral-900 shadow-sm transition hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <IconGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <main id="top" className="relative overflow-hidden">
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl" />

        <section className="mx-auto max-w-7xl px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pb-16 lg:pt-36">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.24em] text-neutral-700 backdrop-blur">
                <IconMonitor className="h-4 w-4" />
                frontend developer
              </div>

              <div className="space-y-6">
                <h1 className="max-w-5xl text-[2.8rem] font-semibold leading-[0.95] tracking-tight text-neutral-950 sm:text-[3.35rem]">
                  Делаю аккуратные сайты
                  <span className="block">и страницы.</span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
                  Я frontend-разработчик. Собираю лендинги, многостраничные сайты и контентные страницы так, чтобы в них
                  чувствовались аккуратность, логика и уверенная подача.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  Смотреть работы
                  <IconArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5"
                >
                  Связаться
                  <IconMail className="h-4 w-4" />
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {proofPills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white/85 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-black/10 bg-white p-5 shadow-[0_30px_120px_-50px_rgba(0,0,0,0.35)]">
                <div className="grid gap-4">
                  <div className="rounded-[1.75rem] bg-neutral-950 p-6 text-white">
                    <div className="mb-10 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/70">
                      подход
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-2xl font-semibold leading-tight">Frontend-сборка без визуального хаоса.</h2>
                      <p className="text-sm leading-7 text-white/70">
                        Мне важно, чтобы страница не только открывалась и скроллилась, а выглядела как законченный
                        проект, который можно спокойно показывать клиенту, команде или аудитории.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-black/10 bg-[#faf9f6] p-6">
                      <div className="mb-8 inline-flex rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-neutral-500">
                        что важно
                      </div>
                      <div className="space-y-3 text-sm leading-7 text-neutral-700">
                        <p className="flex gap-2.5">
                          <span className="mt-0.5 shrink-0 font-medium text-emerald-700" aria-hidden>
                            ✓
                          </span>
                          <span>Чистая вёрстка и нормальный адаптив.</span>
                        </p>
                        <p className="flex gap-2.5">
                          <span className="mt-0.5 shrink-0 font-medium text-emerald-700" aria-hidden>
                            ✓
                          </span>
                          <span>Понятная структура страницы и спокойный ритм блоков.</span>
                        </p>
                        <p className="flex gap-2.5">
                          <span className="mt-0.5 shrink-0 font-medium text-emerald-700" aria-hidden>
                            ✓
                          </span>
                          <span>аккуратная сетка и отступы</span>
                        </p>
                        <p className="flex gap-2.5">
                          <span className="mt-0.5 shrink-0 font-medium text-emerald-700" aria-hidden>
                            ✓
                          </span>
                          <span>нормальные состояния элементов</span>
                        </p>
                      </div>
                    </div>
                    <div className="rounded-[1.75rem] bg-gradient-to-br from-sky-100 via-white to-violet-100 p-6">
                      <div className="mb-8 inline-flex rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-neutral-500">
                        Проекты
                      </div>
                      <div className="space-y-3 text-sm leading-7 text-neutral-700">
                        <p className="flex gap-2.5">
                          <span className="mt-0.5 shrink-0 font-medium text-emerald-700" aria-hidden>
                            ✓
                          </span>
                          <span>лендинги и промо-страницы</span>
                        </p>
                        <p className="flex gap-2.5">
                          <span className="mt-0.5 shrink-0 font-medium text-emerald-700" aria-hidden>
                            ✓
                          </span>
                          <span>сайты с большим объёмом контента</span>
                        </p>
                        <p className="flex gap-2.5">
                          <span className="mt-0.5 shrink-0 font-medium text-emerald-700" aria-hidden>
                            ✓
                          </span>
                          <span>доработка готовых проектов</span>
                        </p>
                        <p className="flex gap-2.5">
                          <span className="mt-0.5 shrink-0 font-medium text-emerald-700" aria-hidden>
                            ✓
                          </span>
                          <span>страницы, где нужна сильная подача</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section id="contact" className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#111113] px-6 py-9 text-white shadow-[0_28px_90px_-48px_rgba(0,0,0,0.65)] sm:px-9 sm:py-11 lg:px-11 lg:py-12">
            <div className="pointer-events-none absolute -left-28 top-0 h-72 w-72 rounded-full bg-violet-500/[0.07] blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/[0.06] blur-3xl" />
            <div className="relative grid gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,18.5rem)] lg:items-center lg:gap-12">
              <div className="max-w-xl space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/55">
                  <IconMessage className="h-3.5 w-3.5 text-white/45" aria-hidden />
                  Контакты
                </div>
                <h2 className="text-[1.65rem] font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-[1.85rem] lg:leading-[1.25]">
                  Если вам нужен сайт, который будет выглядеть аккуратно и ощущаться как готовая работа — буду рада
                  обсудить проект.
                </h2>
              </div>

              <nav className="flex flex-col gap-2" aria-label="Контакты">
                <a
                  href="mailto:angelina.fronten@gmail.com"
                  className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white/95 transition hover:border-white/[0.12] hover:bg-white/[0.055]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                      <IconMail className="h-4 w-4 text-white/70" aria-hidden />
                    </span>
                    <span className="truncate font-medium tracking-tight">angelina.fronten@gmail.com</span>
                  </span>
                  <IconArrowUpRight
                    className="h-4 w-4 shrink-0 text-white/35 transition group-hover:text-white/65"
                    aria-hidden
                  />
                </a>
                <a
                  href="https://github.com/nurahmetovaangelina-byte"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white/95 transition hover:border-white/[0.12] hover:bg-white/[0.055]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                      <IconGithub className="h-4 w-4 text-white/70" aria-hidden />
                    </span>
                    <span className="font-medium tracking-tight">GitHub</span>
                  </span>
                  <IconArrowUpRight
                    className="h-4 w-4 shrink-0 text-white/35 transition group-hover:text-white/65"
                    aria-hidden
                  />
                </a>
                <a
                  href="#work"
                  className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white/95 transition hover:border-white/[0.12] hover:bg-white/[0.055]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                      <IconMonitor className="h-4 w-4 text-white/70" aria-hidden />
                    </span>
                    <span className="font-medium tracking-tight">Смотреть проекты</span>
                  </span>
                  <IconArrowUpRight
                    className="h-4 w-4 shrink-0 text-white/35 transition group-hover:text-white/65"
                    aria-hidden
                  />
                </a>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
