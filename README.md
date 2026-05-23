# 🌐 deshankoswatte.github.io

My personal portfolio website — a clean, minimal single-page site with a dark mode toggle and animated role text.

Live at **[deshankoswatte.github.io](https://deshankoswatte.github.io)**

---

## ✨ Features

- 🌙 **Dark / Light mode** — respects your system preference, with a toggle in the header
- 🔄 **Animated role text** — cycles through titles like *SW Engineer*, *Developer*, *Open Source Fan*, and more using smooth CSS transitions
- 📱 **Responsive** — works on mobile and desktop
- ⚡ **Static export** — fully pre-rendered HTML, no server needed

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 14.2.35 | Framework |
| [React](https://react.dev) | 18 | UI |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.3 | Dark mode |
| [@heroicons/react](https://heroicons.com) | 2.x | Icons |
| TypeScript | 5.x | Type safety |

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/deshankoswatte/deshankoswatte.github.io.git
cd deshankoswatte.github.io

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

## 📦 Building & Deploying

```bash
# Build a production static export
npm run build

# The output is in the `out/` folder — ready to deploy anywhere
```

The site is automatically deployed to GitHub Pages via the workflow in `.github/workflows/gh-pages-deploy.yml` whenever you push to `main`.

---

## 🔒 Security Notes

This site is deployed as a **fully static export** (no server, no middleware). Because of this:

- Middleware-based CVEs (e.g. CVE-2025-29927) **do not apply** — no middleware is executed at runtime
- Server Component CVEs **do not apply** — the site uses the Pages Router with static generation
- Image cache CVEs **do not apply** — the built output is flat HTML/CSS/JS with no running Next.js server

Next.js is pinned to **14.2.35** (the latest fully-patched 14.x release). The only remaining `npm audit` flag is against the `next` package itself for server-mode features this site doesn't use.

---

## 📁 Project Structure

```
├── assets/             # Profile picture and screenshots
├── components/
│   ├── header.tsx      # Nav bar with dark mode toggle
│   ├── footer.tsx      # Copyright + links
│   ├── intro.tsx       # Main content + animated text
│   └── layout.tsx      # Page wrapper
├── pages/
│   └── index.tsx       # Entry point
├── styles/
│   ├── index.css       # Global styles
│   ├── theme.css       # CSS variables (light + dark)
│   └── bootstrap-grid.css  # Minimal grid layout
└── public/             # Static assets (favicon, etc.)
```

---

## 🙋 Connect

| Platform | Link |
|---|---|
| Email | [dehami.deshan@gmail.com](mailto:dehami.deshan@gmail.com) |
| Twitter | [@deshankoswatte](https://twitter.com/deshankoswatte) |
| LinkedIn | [deshankoswatte](https://lk.linkedin.com/in/deshankoswatte) |
| GitHub | [@deshankoswatte](https://github.com/deshankoswatte) |
| Medium | [@deshankoswatte](https://medium.com/@deshankoswatte) |
| Stack Overflow | [deshan-koswatte](https://stackoverflow.com/users/11383375/deshan-koswatte) |

---

<p align="center">
  <i>Copyright © Dehami Koswatte 2021 – present</i><br/>
  <a href="https://www.buymeacoffee.com/deshankoswatte">☕ Buy me a coffee</a>
</p>
