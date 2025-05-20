# Website Development To-Do List (Next.js)

## Setup
- [x] Initialize Next.js project (`npx create-next-app@latest`)
- [x] Configure TypeScript (optional)
- [x] Set up folder structure for `pages`, `components`, and `lib`
- [x] Install required dependencies (e.g. Tailwind CSS, Axios, etc.)
- [ ] Configure environment variables (`.env.local`)

---

## Routing & Page Structure

### Main Pages
- [x] Create `/` → Home page
- [x] Create `/about` → About Us
- [x] Create `/business-units` → Our Business Units
- [x] Create `/news` → News/Updates
- [x] Create `/contact` → Contact Us

### Business Unit Dynamic Pages
- [x] Implement dynamic routing: `/business-units/[slug].js`
- [x] Fetch and render content based on unit data (e.g. using `getStaticProps` or `getServerSideProps`)

---

## Features & Components

### Common
- [x] Header and navigation menu
- [x] Footer with basic info and links
- [x] Responsive layout (mobile/tablet/desktop)
- [x] SEO components (title, meta tags, Open Graph)
- [x] Global layout using `_app.js` or `_layout.js`

### Home Page
- [x] Featured highlights section
- [x] Signature items showcase
- [x] Brand statement section

### About Us Page
- [x] Business background and mission
- [x] Team introduction component

### Business Units
- [x] Unit listing grid or list
- [x] Links to individual business unit pages

### News/Updates
- [x] Blog post list component
- [x] Create individual news post pages
- [ ] Markdown or CMS integration for content

### Contact Us
- [x] Contact information display
- [x] Inquiry/contact form with submission handling via API route
- [x] Add validation and form success/failure feedback

---

## Server-Side / API Routes

- [ ] Set up `/api/contact` route for form submissions
- [ ] Create `/api/business-units` route (or connect to external CMS/backend)
- [ ] Optional: Implement `/api/news` route for updates/blog

---

## Data & CMS
- [ ] Decide on content source (e.g., file-based, Headless CMS like Strapi or Sanity)
- [ ] Implement data fetching (static or server-side)
- [ ] Format and normalize content data as needed

---

## Final Tasks
- [ ] Accessibility testing (a11y)
- [ ] Performance optimization (`next/image`, `dynamic import`, etc.)
- [ ] Cross-browser and device testing
- [ ] Add analytics (e.g. Google Analytics, Plausible)
- [ ] Deploy project (e.g. Vercel, Netlify, custom server)