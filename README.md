# Priyanshu's Portfolio 

# Portfolio Live - "https://priyanshu-s-portfolio-blue.vercel.app/"

Modern portfolio website with real-time LeetCode stats, EmailJS contact form, dynamic stars animation, and professional design.

## ✨ Features

- **Real-time LeetCode Stats** – Live solved count, rank, streaks from GraphQL API (5min cache)
- **EmailJS Contact Form** – Name/email/message → your inbox (no backend)
- **Responsive Design** – Tailwind + shadcn/ui components
- **Smooth Animations** – Framer Motion + custom cursor
- **Dynamic Stars** – Canvas background effect
- **React Router** – Single page app navigation
- **React Query** – Data fetching/caching
- **Progress Bars** – Current projects with live updates
- **Download Resume** – Direct PDF from Hero
- **Fast HMR** – Vite dev server

## 🛠️ Tech Stack

```
Frontend: React 18 + TypeScript + Vite + TailwindCSS
Components: shadcn/ui + lucide-react + Framer Motion
State: React Query + React Hook Form + Zod
APIs: EmailJS + LeetCode GraphQL
Other: react-router-dom + react-icons
```

## 🚀 Quick Start

```bash
# Clone & install
git clone <repo> && cd priyanshu-s-digital-canvas
npm install

# Dev server (localhost:8081)
npm run dev

# Build production
npm run build

# Preview
npm run preview
```

## 📱 Screenshots

| Hero Section | Projects | Contact Form |
|--------------|----------|--------------|
| ![Hero](https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Hero) | ![Projects](https://via.placeholder.com/800x400/1e1b4b/ffffff?text=Projects) | ![Contact](https://via.placeholder.com/800x400/0f172a/ffffff?text=Contact) |

## 🔧 Customization

1. **Profile**: `src/data/portfolio.ts`
   ```ts
   export const profile = {
     name: "Your Name",
     avatar: "/profile.jpg",  // public/
     email: "your@email.com", // EmailJS
   };
   ```

2. **Projects**: Add/edit `projects[]` in portfolio.ts

3. **EmailJS**: Get keys from [emailjs.com](https://www.emailjs.com)
   - Update Contact.tsx service/template/user IDs

4. **LeetCode**: Change `LEETCODE_USERNAME` in `useLeetCodeStats.tsx`

## 🚀 Deployment

**Vercel** (recommended):
```bash
npm i -g vercel
vercel --prod
```

**Netlify**:
```
npm run build
# Drag dist/ to Netlify
```

**GitHub Pages**:
```
npm run build
# Deploy dist/
```

## Scripts

```bash
npm run dev     # Development (localhost:8081)
npm run build   # Production build
npm run preview # Local preview
npm run lint    # ESLint
npm run test    # Vitest
```

## Environment Variables

```
VITE_EMAILJS_SERVICE_ID=service_io0ur2e
VITE_EMAILJS_TEMPLATE_ID=template_6b25qzd
VITE_EMAILJS_USER_ID=lMH2Ow_EM0wwHPHBg
```

## 🎨 License

MIT License – feel free to use/fork/customize.

---

⭐ **Made with React + Vite + Tailwind** – Deploy in 60s!

