# 👨‍💻 Avneel Singh — Portfolio

A 🌙 minimal, dark, and responsive portfolio built with **React, TypeScript, Vite, Tailwind CSS, and Motion**. Showcases projects, education, skills, and professional links.

## 🌐 Live Portfolio

**Website:** [Visit My Portfolio](https://your-portfolio-url.com)

## ✨ Features

- 📱 Responsive Home, About, Projects, and Contact pages.
- 🗂️ Filterable project gallery with live-demo and source-code links.
- ♿ Accessible navigation, keyboard focus states, and reduced-motion support.
- 📧 Contact form that opens a pre-filled email draft.
- ⚙️ Optional FastAPI backend with SQLite persistence.

## 🚀 Run Locally

**Requirements:** Node.js, npm, and Python 3.11+ (for the backend).

```bash
npm install
npm run dev
```

🌐 Open the local URL displayed by Vite.

To run the frontend and backend together:

```bash
pip install -r server/requirements.txt
npm run dev:all
```

## 🧪 Quality Checks

```bash
npm run build
npm run test:backend
```

## 📁 Project Structure

- 📄 `src/data/site.ts` — Portfolio content, skills, education, and projects.
- 🧩 `src/pages/` — Page components.
- 🎨 `src/components/` — Shared UI components.
- 🛠️ `src/lib/` — Routing and utility functions.
- 🖼️ `public/` — Static assets.
- 🖥️ `server/` — Optional FastAPI backend and database.