# Optimal IT Solution — Website

Next.js static site for optimalitsolution.com. No backend required for hosting.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production (static export)

```bash
npm run build
```

Output is in the **`out/`** folder: plain HTML, CSS, and JS. Upload the **contents** of `out/` to any static host.

## Deploy (frontend only)

Your site is already configured for **static export** (`output: "export"` in `next.config.js`), so you can host it anywhere that serves static files.

### Option 1: Vercel (recommended)

1. Push the project to GitHub (exclude `backend/` if you don’t need it).
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import your repo.
3. **Root Directory:** leave as `.` (or set to the repo root).
4. **Build Command:** `npm run build`  
   **Output Directory:** `out`
5. **Environment variables:** add `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` with your Formspree form URL (e.g. `https://formspree.io/f/xxxxx`) so the contact form works.
6. Deploy. Vercel will assign a URL; point your domain (optimalitsolution.com) in the project **Settings → Domains**.

### Option 2: Netlify

1. Push to GitHub, then [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**.
2. **Build command:** `npm run build`  
   **Publish directory:** `out`
3. Add `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` in **Site settings → Environment variables**.
4. Add your custom domain in **Domain management**.

### Option 3: Any static host

- Run `npm run build`, then upload the **contents** of the `out/` folder to your host (e.g. cPanel, Firebase Hosting, GitHub Pages, or your server’s `public_html`).
- For the contact form to work, the host must support setting env vars for the build, or you can build locally with `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` set and upload the generated `out/` folder.

## Contact form

The form works without a backend:

- **With Formspree:** set `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` in your build env to your Formspree form URL. Submissions are sent to your email via Formspree.
- **Without Formspree:** leave the env unset; submitting the form opens the user’s email client (mailto) with your address and a pre-filled message.

## Backend

The `backend/` folder (NestJS + MongoDB) is not required for the current site. You can ignore or remove it when deploying. Add and deploy it later if you want to store form submissions in a database or send email from your own server.
