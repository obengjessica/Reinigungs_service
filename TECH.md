# TECH.md

## 🧰 Tech Stack

* Next.js (App Router)
* Tailwind CSS
* shadcn/ui
* Framer Motion
* GSAP (limited use)
* Vercel (deployment)

---

## 📁 Project Structure

/app
/about
/services
/contact
/page.tsx

/components
/atoms
/molecules
/organisms
/layout

/lib
/styles

---

## 🧱 Architecture Rules

### Atomic Design

* Atoms: Button, Input, Typography
* Molecules: Cards, Form groups
* Organisms: Navbar, Hero, Sections

---

## 🧩 Component Rules

* Keep components small and reusable
* Avoid duplication
* Max ~200 lines per component
* Use clear naming

---

## 🎨 Styling Rules

* Use Tailwind CSS only
* No inline styles
* Maintain consistent spacing scale
* Use reusable utility patterns

---

## ⚡ Animations

### Framer Motion

* Fade-in
* Hover effects

### GSAP

* Hero animations only
* Scroll-triggered effects (minimal)

---

## 📄 Page Implementation

### Home

* Compose all sections

### About

* Static structured content

### Services

* Service cards grid

### Contact

* Form + map

---

## 📝 Forms

* Use Formspree OR mock handler

---

## 🔍 SEO

* Add metadata per page
* Use proper heading hierarchy

---

## 🚀 Performance

* Use Next/Image
* Optimize assets
* Avoid unnecessary JS

---

## 🧪 Code Quality

* Clean, readable code
* No hacks
* Reusable components
* Add helpful comments

---

## 🚫 Avoid

* Large monolithic components
* Messy Tailwind usage
* Copy-paste code

---

## 📦 Output Expectations

* Production-ready structure
* Clean architecture
* Maintainable codebase
