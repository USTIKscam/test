# Портфолио фрилансера с админ-панелью

Полноценное веб-приложение на Next.js для начинающего программиста-фрилансера. Публичная часть показывает услуги, проекты, цены, отзывы и принимает заявки. Админ-панель позволяет управлять контентом, проектами, услугами, отзывами, FAQ, заявками и смотреть внутреннюю аналитику.

## Стек

- Next.js App Router, TypeScript, React
- Tailwind CSS
- Prisma ORM
- SQLite для локального запуска
- Zod и React Hook Form
- Простая cookie/JWT-авторизация админки
- Recharts для графиков
- Внутренняя аналитика в базе данных

SQLite выбран для простого локального старта. Для PostgreSQL позже достаточно поменять `DATABASE_URL` и provider в `prisma/schema.prisma`.

## Быстрый запуск

```bash
corepack pnpm install
corepack pnpm approve-builds --all
copy .env.example .env
corepack pnpm prisma migrate dev --name init
corepack pnpm seed
corepack pnpm dev
```

Сайт откроется на `http://localhost:3000`.

## Вход в админку

Админ-панель: `http://localhost:3000/admin`

Демо-доступ:

- email: `admin@example.com`
- password: `admin12345`

Перед реальным использованием обязательно поменяйте пароль и `AUTH_SECRET` в `.env`.

## Переменные окружения

```env
DATABASE_URL="file:./dev.db"
AUTH_SECRET="replace-with-a-long-random-secret"
ADMIN_EMAIL="admin@example.com"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

## Основные команды

```bash
corepack pnpm dev
corepack pnpm build
corepack pnpm start
corepack pnpm prisma migrate dev
corepack pnpm prisma studio
corepack pnpm seed
```

## Что реализовано

- Публичные страницы: главная, услуги, портфолио, отдельный проект, цены, отзывы, контакты, политика конфиденциальности, 404.
- Демо-данные: 8 проектов, 10 услуг, 5 отзывов, 6 FAQ, настройки сайта, админ и тестовые заявки.
- Форма заявки с валидацией, согласием, honeypot-антиспамом и базовым rate limit по IP-хешу.
- Сохранение заявок в базу.
- Админка `/admin` с защищенными маршрутами.
- Dashboard: посещения, заявки, клики Telegram/телефона, просмотры проектов, конверсия, график и последние заявки.
- Управление заявками: поиск, фильтр по статусу, статусы, важность, заметка, удаление, CSV-экспорт.
- CRUD проектов, услуг, отзывов, FAQ.
- Редактирование настроек и текстов сайта.
- Внутренняя аналитика: page views, клики, формы, страницы, устройства, просмотры проектов.
- SEO: metadata, Open Graph, `sitemap.xml`, `robots.txt`, ЧПУ-slug.

## Структура

```text
app/                  страницы и API routes
components/ui/        базовые UI-компоненты
components/public/    публичные секции сайта
components/admin/     админские таблицы, графики и формы
lib/                  Prisma, auth, схемы, аналитика, утилиты
prisma/               schema.prisma, миграции, seed
```

## Как добавить проект

1. Войдите в `/admin`.
2. Откройте раздел `Проекты`.
3. Заполните название, slug, категорию, описания, обложку, технологии и статус.
4. Включите `Опубликован`, чтобы проект появился на сайте.
5. Включите `Избранный`, чтобы проект появился на главной.

## Деплой

1. Создайте production-базу SQLite или PostgreSQL.
2. Укажите production `DATABASE_URL`.
3. Установите длинный случайный `AUTH_SECRET`.
4. Укажите публичный `NEXT_PUBLIC_SITE_URL`.
5. Выполните миграции Prisma.
6. Соберите проект командой `corepack pnpm build`.

Для PostgreSQL нужно изменить datasource provider в `prisma/schema.prisma` на `postgresql`, затем выполнить миграции заново для новой базы.

## Перед публикацией

- Сменить пароль администратора.
- Сменить `AUTH_SECRET`.
- Заменить Telegram, телефон, email и ссылки в настройках сайта.
- Проверить тексты услуг и цены.
- Заменить demo-ссылки и изображения проектов.
- Настроить резервное копирование базы.
