# CARTON — лендинг

Production-ready лендинг студии 3D-анимации в стиле Pixar / Elemental. Next.js 14 (App Router), TypeScript, TailwindCSS, Framer Motion.

## Команды

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Если `npm run dev` в терминале Cursor падает с ошибкой Node, запустите Next напрямую:
```bash
node node_modules/next/dist/bin/next dev
```

```bash
# Сборка для продакшена
npm run build

# Запуск продакшен-сборки
npm start
```

## Куда положить файлы

| Путь | Описание |
|------|----------|
| **`/public/brand/logo.png`** | Логотип студии (квадрат, желательно от 512×512 px). Используется в шапке, hero и футере. |
| **`/public/works/demo-1.mp4` … `demo-9.mp4`** | Видео работ. Имена файлов соответствуют слагам в `lib/data.ts` (demo-1 … demo-9). Если файла нет — показывается заглушка. |
| **`/public/favicon.ico`** | По желанию: отдельная иконка вкладки. Подробнее — в [FAVICON.md](./FAVICON.md). |

## Деплой на Vercel

1. Залейте репозиторий на GitHub.
2. Подключите репозиторий к [Vercel](https://vercel.com) (Import Project).
3. Root Directory: `./` (или папка с проектом).
4. Build Command: `npm run build`, Output: Next.js (определится автоматически).
5. Добавьте переменную окружения `NEXT_PUBLIC_SITE_URL` = `https://ваш-домен.com` для корректных Open Graph URL (по желанию).
6. Deploy.

Сайт готов к деплою: одна страница, без API routes, статика и серверный рендер.

## Структура

- `app/` — layout, главная страница, стили
- `components/` — Navbar, Hero, Works, Services, Process, Pricing, Testimonials, FAQ, Contact, Footer
- `lib/data.ts` — данные работ, услуг, отзывов, FAQ, навигация
- `lib/utils.ts` — утилиты (cn, пути к медиа)

## Контакты в коде

В `lib/data.ts` замените на свои значения:

- `whatsAppPlaceholder` — номер WhatsApp без «+» (например `79001234567`)
- `contactEmail` — почта для связи
