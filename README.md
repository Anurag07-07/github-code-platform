# GitHub Code Platform

A modern web application built with Next.js, Tailwind CSS, Prisma, and Shadcn/UI.

## 🚀 Project Overview

This project is a high-performance, developer-centric platform designed for modern web development workflows. It leverages the latest technologies to ensure a seamless and efficient developer experience.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (v16.2.1)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Database ORM**: [Prisma](https://www.prisma.io/) (v6.19.2)
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/) (Radix + Nova preset)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## ✅ Completed Setup

### 1. **Framework Initialization**
- Next.js project set up with TypeScript and App Router.
- Linting configured with ESLint.

### 2. **Tailwind CSS v4 Integration**
- Configured with PostCSS and optimized for performance.
- Global styles initialized in `app/globals.css`.

### 3. **Shadcn/UI Initialization**
- Initialized with **Radix** component library and **Nova** preset.
- Configuration stored in `components.json`.
- Essential components and utilities added:
  - `components/ui/button.tsx`
  - `lib/utils.ts`

### 4. **Prisma Setup**
- Prisma ORM installed and initialized.
- Datasource provider configured to **PostgreSQL**.
- Schema file created at `prisma/schema.prisma`.
- Client generation output configured to `lib/generated/prisma`.

## 📂 Project Structure

```text
├── app/                  # Next.js App Router
├── components/           # UI Components
│   └── ui/               # Shadcn/UI components
├── lib/                  # Shared utilities and generated Prisma client
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── components.json       # Shadcn/UI configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js installed.
- pnpm installed (`npm install -g pnpm`).
- A PostgreSQL database instance.

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your `DATABASE_URL`:
     ```env
     DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
     ```

### Development

Run the development server:
```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Database Migrations

After modifying `prisma/schema.prisma`, run:
```bash
pnpm prisma migrate dev
```

## 📝 Next Steps

- Define database models in `prisma/schema.prisma`.
- Build out core application features.
- Add more Radix-based Shadcn components as needed.
