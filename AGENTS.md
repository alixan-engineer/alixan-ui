# AGENTS.md

Краткий контекст для AI-агентов, работающих с `alixan-ui` (`ui.alixan.kz`).

## Проект

`ui.alixan.kz` — входная страница экосистемы Alixan UI. Она не является документацией компонентов. Ее задача — быстро объяснить, что Alixan UI это легковесная, красивая UI-система в Cupertino/iOS-like стиле, и отправить пользователя в нужную реализацию:

- Nuxt: `https://nuxt.ui.alixan.kz` — готово.
- Angular: planned / coming soon.
- Flutter: planned / coming soon.

Страница должна быть красивой, понятной, стабильной и очень быстрой. Основной сценарий: пользователь открыл сайт, сразу понял ценность, выбрал stack.

## UX и контент

- Первый экран должен быть всем сайтом: один цельный блок без обязательного скролла на обычных desktop/mobile viewport.
- Не превращай сайт в длинный маркетинговый лендинг. Нужны только: бренд, короткое описание, 3 карточки `Get started` для Nuxt / Angular / Flutter, language switcher, аккуратные SEO/meta.
- Nuxt-карточка ведет на `https://nuxt.ui.alixan.kz`.
- Angular и Flutter показывают `Coming soon`; не делай пустые или битые ссылки.
- Стиль: Cupertino-like, чистый, премиальный, легкий, с понятной иерархией. Не перегружай декоративными эффектами.
- Текст должен помещаться в контейнеры на mobile и desktop, без наложений и горизонтального скролла.
- UI должен выглядеть как продуктовая точка входа в экосистему, а не как портфолио автора.

## Реальная структура

Сейчас проект минимальный:

- `app/app.vue` — основная страница.
- `nuxt.config.ts` — Nuxt config, dev server на `9001`, Geist font подключен через Google Fonts.
- `public/*` — статические файлы, включая `CNAME`.

Если структура будет расширяться, держи ее простой:

- `app/components/*` — локальные компоненты страницы.
- `app/components/ui/*` — переиспользуемые базовые UI primitives, если они реально нужны.
- `i18n/locales/en.json`, `ru.json`, `kk.json` — переводы, когда включен `@nuxtjs/i18n`.

## Стек и зависимости

- Nuxt 4 / Vue 3 / TypeScript.
- Vue SFC: `<script setup lang="ts">`.
- Используй существующий стиль Nuxt conventions и auto-imports.
- Не добавляй новые зависимости без явного запроса.
- Если нужен i18n, добавляй `@nuxtjs/i18n` осознанно и настраивай локали `en`, `ru`, `kk`.
- Шрифт: Geist. Не меняй его без причины.

## Переиспользование Alixan UI Nuxt

Можно использовать компоненты и подходы из соседнего проекта `../alixan-ui-nuxt`, особенно:

- кнопки;
- SEO/page meta helpers;
- i18n-подход;
- Geist/font conventions;
- icons из `@lucide/vue`, если зависимость добавлена или уже есть;
- общую визуальную логику Cupertino-like компонентов.

Не копируй большие части документации или registry-логику из `alixan-ui-nuxt`: для `ui.alixan.kz` нужен маленький gateway-сайт, а не документационный портал.

## i18n правила

Сайт должен поддерживать i18n. Целевые языки:

- `en` — default;
- `ru`;
- `kk`.

Правила:

- Не хардкодь отображаемый текст в template, если i18n уже подключен.
- При добавлении ключей обновляй все три локали.
- Для внутренних ссылок используй `useLocalePath()`, если подключен `@nuxtjs/i18n`.
- SEO title/description тоже должны быть локализованы, если i18n уже включен.
- После изменений проверяй JSON локалей.

## SEO

Главная цель SEO — ясно представить Alixan UI как UI-систему для Nuxt, Angular и Flutter.

Минимум:

- title;
- description;
- canonical/og url `https://ui.alixan.kz`;
- Open Graph title/description/type;
- Twitter card;
- корректный `html lang`.

Не используй устаревшие или случайные описания вроде generic portfolio/product landing, если страница именно про Alixan UI.

## Команды

- `npm run dev` — dev server на `9001`.
- `npm run build` — Nuxt build.
- `npm run generate` — static generation.
- `npm run preview` — preview generated/build output.

## Проверки перед ответом

Минимум:

```bash
npm run build
```

Если добавлен i18n:

```bash
python3 -m json.tool i18n/locales/en.json >/dev/null
python3 -m json.tool i18n/locales/ru.json >/dev/null
python3 -m json.tool i18n/locales/kk.json >/dev/null
```

Если build невозможно запустить из-за окружения, явно скажи это в финальном ответе.

## Важные ограничения

- Не трогай unrelated dirty changes.
- Не используй `git reset --hard`, `git checkout --` и другие destructive команды без явного запроса.
- Для ручных правок используй `apply_patch`.
- Держи изменения маленькими и привязанными к цели сайта.
