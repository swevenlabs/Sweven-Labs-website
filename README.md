# Sweven Labs — Official Website

> **Where Visions Become Technology.**

Sweven Labs is an independent software studio designing and engineering custom web applications, mobile platforms, AI engines, SaaS products, and bespoke software.

---

## 🚀 Tech Stack

- **Framework**: React 19 + Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Custom Design System
- **Animation**: Motion (`motion/react`) + Custom CSS Keyframe Mechanics
- **Icons**: Lucide React
- **Backend / Form Endpoint**: Google Apps Script Web App + Google Sheets

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Define your environment variables inside `.env`:
```env
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
VITE_SITE_URL=https://swevenlabs.co
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📊 Google Sheets & Apps Script Integration Setup

The contact form sends submissions directly to a Google Sheet via a Google Apps Script Web App endpoint—no complex server management required!

Detailed step-by-step setup documentation is located in [`docs/google-sheets-setup.md`](./docs/google-sheets-setup.md) and the Apps Script code is available in [`docs/google-apps-script.gs`](./docs/google-apps-script.gs).

### Summary Steps:
1. Create a Google Sheet named **Sweven Labs Inquiries**.
2. Add Row 1 headers: `Timestamp`, `Name`, `Email`, `Phone`, `Company`, `Project Type`, `Budget`, `Timeline`, `Preferred Contact`, `Message`.
3. Open **Extensions -> Apps Script** and paste the contents of `docs/google-apps-script.gs`.
4. Click **Deploy -> New deployment**, select **Web app**, set execute as **Me**, who has access **Anyone**.
5. Copy the generated Web App URL and assign it to `VITE_GOOGLE_APPS_SCRIPT_URL`.

---

## 📦 Production Build & Vercel Deployment

### Local Production Build Test
```bash
npm run build
npm run preview
```

### Deploying to Vercel
1. Connect your GitHub repository to Vercel.
2. Build Settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add Environment Variable:
   - Key: `VITE_GOOGLE_APPS_SCRIPT_URL`
   - Value: `https://script.google.com/macros/s/YOUR_APPS_SCRIPT_ID/exec`
4. Deploy!

---

## ⚡ Key Features

- **Exact Official Emblem Logo Integration**: Uses the official Sweven Labs logo asset throughout navbar, hero, favicon, open-graph cards, and background watermarks.
- **Pure Black Dark Mode Aesthetic**: Engineered with `#000000` canvas background and purple/violet neon glows derived directly from the official logo.
- **Select Dropdown Accessibility Fix**: Explicitly styled dark-mode `select` and `option` elements preventing white-on-white text visibility bugs.
- **Spam Protection**: Client-side validation, honeypot field, email formatting checks, and submit button throttling.
- **Responsive & Accessible**: Full touch and desktop responsive scaling, reduced-motion fallback support, and clean typography hierarchy with Space Grotesk, Manrope, and IBM Plex Mono.
