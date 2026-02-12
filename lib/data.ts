export type WorkCategory = "Реклама" | "Love Story" | "Reels" | "Explainer" | "Интро" | "Все";

export interface WorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  slug: string;
  duration?: string;
  description?: string;
}

export const works: WorkItem[] = [
  { id: "1", title: "Предложение", category: "Love Story", slug: "Предложение 4 минуты + озвучка.mp4", duration: "4 мин" },
  { id: "2", title: "Годовщина 30 лет", category: "Love Story", slug: "Годовщина 30 лет, 4 минуты озвучка.mp4", duration: "4 мин" },
  { id: "3", title: "Для жены", category: "Love Story", slug: "Для жены 4 минуты без озвучки.mp4", duration: "4 мин" },
  { id: "4", title: "15 лет в браке", category: "Love Story", slug: "15 лет в браке 2 минуты с озвучкой.mp4", duration: "2 мин" },
  { id: "5", title: "1 минута без озвучки", category: "Love Story", slug: "1 минуты буз озвучки.mp4", duration: "1 мин" },
  { id: "6", title: "1.5 минуты без озвучки", category: "Love Story", slug: "1.5 минуты без озвучки .mp4", duration: "1.5 мин" },
];

export const workCategories: WorkCategory[] = ["Все", "Love Story"];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: "script" | "characters" | "animation" | "voice" | "edit" | "subtitles";
}

export const services: ServiceItem[] = [
  { id: "1", title: "Сценарий", description: "Пишем сценарий под ваш бриф и целевую аудиторию.", icon: "script" },
  { id: "2", title: "Персонажи", description: "Дизайн и моделирование персонажей в стиле Pixar.", icon: "characters" },
  { id: "3", title: "Анимация", description: "Полная 3D-анимация с мягким освещением и эмоциями.", icon: "animation" },
  { id: "4", title: "Озвучка", description: "Подбор голосов и запись профессиональной озвучки.", icon: "voice" },
  { id: "5", title: "Монтаж", description: "Монтаж, цветокоррекция, звук под ключ.", icon: "edit" },
  { id: "6", title: "Субтитры", description: "Субтитры на любом языке и адаптация под платформы.", icon: "subtitles" },
];

export const processSteps = [
  { step: 1, title: "Бриф", description: "Заполняете форму или созваниваемся — фиксируем задачу и пожелания." },
  { step: 2, title: "Сценарий", description: "Пишем сценарий и согласовываем с вами." },
  { step: 3, title: "Раскадровка", description: "Визуальная раскадровка ключевых сцен для утверждения." },
  { step: 4, title: "Анимация", description: "Создаём анимацию, показываем черновые версии для правок." },
  { step: 5, title: "Сдача", description: "Финальный рендер 4K, передача файлов и прав." },
];

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "start",
    name: "Start",
    tagline: "Короткий ролик до 15 сек",
    priceNote: "от 45 000 ₽",
    features: ["Сценарий", "1–2 персонажа", "До 15 сек", "Full HD", "2 раунда правок"],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Реклама, Reels, Love Story",
    priceNote: "от 95 000 ₽",
    features: ["Сценарий + раскадровка", "До 4 персонажей", "До 60 сек", "4K рендер", "Озвучка", "4 раунда правок"],
    highlighted: true,
  },
  {
    id: "studio",
    name: "Studio",
    tagline: "Полный проект под ключ",
    priceNote: "по запросу",
    features: ["Всё из Pro", "Неограниченная длительность", "Приоритетный рендер", "Персональный менеджер", "Расширенная гарантия"],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  { id: "1", name: "Анна К.", role: "Маркетолог", company: "Beauty Brand", text: "Ролик получился именно в духе Pixar — тёплый, запоминающийся. Заказы выросли.", rating: 5 },
  { id: "2", name: "Дмитрий и Елена", role: "Семья", text: "Love Story на свадьбу — гости до сих пор пересматривают. Спасибо за эмоции!", rating: 5 },
  { id: "3", name: "Михаил Т.", role: "Founder", company: "SaaS", text: "Explainer за 2 недели, 4K. Профессионально и в срок. Рекомендую.", rating: 5 },
  { id: "4", name: "Ольга С.", role: "SMM", text: "Reels для соцсетей — вирусный формат, мягкая 3D. Очень довольны результатом.", rating: 5 },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  { id: "1", question: "Сколько времени занимает производство?", answer: "Обычно 1–3 дней для ролика. Точные сроки зависят от сложности и загрузки студии — обсудим после брифа." },
  { id: "2", question: "В каком формате отдаёте готовый ролик?", answer: "Отдаём в 4K (или Full HD по запросу), MP4, с отдельной дорожкой без музыки/озвучки при необходимости. Все права на материал передаём вам." },
  { id: "3", question: "Можно ли использовать своих персонажей или логотип?", answer: "Да. Мы можем интегрировать ваших персонажей, логотип и фирстиль в 3D-стилистику и анимацию." },
  { id: "4", question: "Как проходит согласование?", answer: "Сначала сценарий, затем раскадровка, потом черновые версии анимации. На каждом этапе — ваши правки. Количество раундов зависит от пакета." },
  { id: "5", question: "Работаете ли с юрлицами?", answer: "Да. Работаем по договору, с НДС или без — по согласованию. Выставляем счёт, подписываем акты." },
];

export const navLinks = [
  { href: "#works", label: "Работы" },
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процесс" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакты" },
];

export const studioName = "CARTON";
// Ссылка на чат WhatsApp (wa.me или короткая wa.link)
export const whatsAppUrl = "https://wa.link/xwc2or";
export const contactEmail = "hello@carton.studio";
