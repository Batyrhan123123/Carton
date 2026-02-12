# Favicon и логотип

## Логотип

Положите файл логотипа по пути:

```
/public/brand/logo.png
```

Он будет использоваться в:
- Navbar (слева)
- Hero (крупный 3D-медальон)
- Footer

Рекомендуемый размер: не менее 512×512 px (квадрат), PNG с прозрачностью.

---

## Favicon

**Вариант 1 (рекомендуется):**  
Скопируйте ваш логотип как favicon:

- Положите `logo.png` в `/public/brand/logo.png` (как выше).
- В `app/layout.tsx` уже подключено: `<link rel="icon" href="/brand/logo.png" type="image/png" />` — браузер может использовать его как иконку вкладки.

**Вариант 2 (отдельный favicon):**  
Создайте фавикон из логотипа и положите в корень `public`:

1. Возьмите квадратное изображение логотипа (рекомендуется 32×32 или 48×48 px для favicon.ico).
2. Конвертируйте в ICO (онлайн: [favicon.io](https://favicon.io), [realfavicongenerator.net](https://realfavicongenerator.net)).
3. Сохраните как `public/favicon.ico`.
4. Для Apple Touch Icon: положите `apple-touch-icon.png` (180×180) в `public/`.

**Вариант 3 (Next.js App Router):**  
В Next.js 13+ можно положить `icon.png` или `icon.ico` в папку `app/` — тогда Next сгенерирует favicon автоматически. Например:

- `app/icon.png` (32×32 или 48×48)
- или `app/apple-icon.png` (180×180) для Apple devices

После добавления файлов перезапустите `npm run dev` при необходимости.
