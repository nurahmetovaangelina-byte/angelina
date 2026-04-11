export const projects = [
  {
    id: 1,
    title: "House Care",
    year: "2025",
    type: "Многостраничный сайт",
    description:
      "Проект с большим объёмом контента, формами, слайдерами и множеством смысловых блоков. Хороший пример аккуратной сборки сложной страницы.",
    stack: ["HTML", "SCSS/CSS", "JavaScript", "Swiper"],
    accent: "bg-[rgb(66,51,77)]",
    accentForeground: "light",
    focus: ["Большой объём контента", "Формы и интерактив", "Адаптивная вёрстка"],
    link: "https://nurahmetovaangelina-byte.github.io/buildhouses/",
  },
  {
    id: 2,
    title: "Macaroons",
    year: "2025",
    type: "Промо-сайт / каталог",
    description:
      "Продуктовый лендинг, где важно было удержать лёгкость подачи, не потеряв структуру каталога, сценарий заказа и читаемость блоков.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "bg-[#eba8b1]",
    focus: ["Продуктовая подача", "Каталог", "Сценарий заказа"],
    link: "https://nurahmetovaangelina-byte.github.io/Macaruns/",
  },
  {
    id: 3,
    title: "Travel Agency",
    year: "2025",
    type: "Туристический лендинг",
    description:
      "Лендинг с атмосферной подачей, где важны ритм блоков, визуальная лёгкость и понятная навигация по предложению.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "bg-[#dde0db]",
    focus: ["Атмосфера", "Чистая композиция", "Подача оффера"],
    link: "https://nurahmetovaangelina-byte.github.io/travelagency/",
  },
  {
    id: 4,
    title: "Цифробизнес",
    year: "2026",
    type: "Коммерческий лендинг",
    description:
      "Коммерческая страница под бизнес-задачу: структура, акценты, логика блоков и аккуратная frontend-сборка без ощущения сырого проекта.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "bg-gradient-to-br from-indigo-200 via-blue-100 to-white",
    focus: ["Коммерческий оффер", "Смысловые акценты", "Живая страница"],
    link: "https://countrol.ru/autobp/",
  },
  {
    id: 5,
    title: "Протокол Контроля",
    year: "2026",
    type: "Сайт-статья",
    description:
      "Длинная контентная страница, где важно было собрать навигацию, типографику и структуру так, чтобы большой объём информации читался легко.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "bg-gradient-to-br from-violet-200 via-fuchsia-100 to-white",
    focus: ["Long-form страница", "Навигация по контенту", "Типографика"],
    link: "https://countrol.ru/autobplm/",
  },
];

export const proofPills = [
  "лендинги и многостраничники",
  "адаптив и интерактив",
  "доработка существующих сайтов",
];

export const strengths = [
  {
    title: "Аккуратная реализация",
    text: "Собираю страницы так, чтобы они выглядели аккуратно: сетка, отступы, типографика, состояния элементов и логика блоков работают вместе.",
  },
  {
    title: "Продуманный адаптив",
    text: "Собираю страницу так, чтобы она нормально выглядела и работала и на телефоне, и на большом экране.",
  },
  {
    title: "Работа с контентом",
    text: "Люблю проекты, где нужно привести в порядок большой объём информации и сбрать её в понятную страницу без перегруза.",
  },
  {
    title: "Доработка готовых проектов",
    text: "Могу подключиться к существующему сайту: исправить вёрстку, привести интерфейс к единому виду и аккуратно развить проект дальше.",
  },
];

export const services = [
  {
    title: "Лендинги и промо-страницы",
    text: "Соберу страницу под продукт, услугу или эксперта: с акцентами, понятной структурой и аккуратной frontend-реализацией.",
  },
  {
    title: "Многостраничные сайты",
    text: "Подхожу к проекту системно: чтобы страницы были связаны между собой по ритму, логике и общему ощущению сайта.",
  },
  {
    title: "Frontend по макету или референсам",
    text: "Если визуальная часть уже продумана, соберу её чисто и внимательно. Если нет — помогу выстроить структуру и подачу на уровне блоков.",
  },
  {
    title: "Доработка существующего сайта",
    text: "Исправлю адаптив, добавлю новые блоки, приведу стили к единому виду и уберу ощущение недоделанного интерфейса.",
  },
];

export function runPortfolioSanityChecks() {
  const ids = projects.map((project) => project.id);
  const titles = projects.map((project) => project.title);
  const links = projects.map((project) => project.link);

  console.assert(projects.length >= 5, "Expected at least 5 portfolio projects.");
  console.assert(new Set(ids).size === ids.length, "Project ids must be unique.");
  console.assert(new Set(titles).size === titles.length, "Project titles must be unique.");
  console.assert(links.every((link) => /^https?:\/\//.test(link)), "Every project link must be an absolute URL.");
  console.assert(
    projects.every((project) => Array.isArray(project.stack) && project.stack.length > 0),
    "Every project must include a tech stack."
  );
  console.assert(
    projects.every((project) => Array.isArray(project.focus) && project.focus.length > 0),
    "Every project must include focus tags."
  );
}
