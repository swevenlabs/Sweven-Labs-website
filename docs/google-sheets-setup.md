# Sweven Labs — Google Sheets & Apps Script Integration Guide

This guide walks you through connecting the **Sweven Labs** website contact form to a Google Sheet using Google Apps Script Web Apps.

---

## Architecture Overview

```
Website Contact Form (React)
          ↓ (HTTPS POST request with JSON payload)
Google Apps Script Web App
          ↓ (Server-validated & timestamped)
Google Spreadsheet ("Sweven Labs Inquiries")
```

---

## Step 1: Create the Google Sheet

1. Open [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Name the sheet: **Sweven Labs Inquiries**.
3. In **Row 1**, enter the following exact column headers:

| Cell | Header | Description |
| :--- | :--- | :--- |
| **A1** | `Timestamp` | Generated automatically by Apps Script |
| **B1** | `Name` | Sender's full name |
| **C1** | `Email` | Sender's email address |
| **D1** | `Phone` | Phone number (optional) |
| **E1** | `Company` | Company or organization name |
| **F1** | `Project Type` | Selected service category |
| **G1** | `Budget` | Selected budget range |
| **H1** | `Timeline` | Desired timeline |
| **I1** | `Preferred Contact` | Preferred contact method (Email/Phone/WhatsApp) |
| **J1** | `Message` | Project details and vision statement |

---

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script** in the top navigation bar.
2. Delete any code inside `Code.gs`.
3. Open `docs/google-apps-script.gs` from this project repository, copy its entire contents, and paste it into the Apps Script editor.
4. Click the **Save** icon (floppy disk) or press `Ctrl + S` / `Cmd + S`.

---

## Step 3: Deploy as Web App

1. In the top right of the Apps Script editor, click **Deploy** → **New deployment**.
2. Click the gear icon next to "Select type" and select **Web app**.
3. Fill in the deployment configuration:
   - **Description**: `Sweven Labs Form API v1`
   - **Execute as**: `Me (your_email@gmail.com)`
   - **Who has access**: **`Anyone`** *(Crucial: allows the website form to post submissions without requiring user login)*
4. Click **Deploy**.
5. Grant permissions when prompted:
   - Click *Review Permissions*.
   - Choose your Google Account.
   - If a security warning appears ("Google hasn't verified this app"), click *Advanced* → *Go to Sweven Labs Inquiries (unsafe)*.
   - Click *Allow*.
6. Copy the generated **Web App URL** (e.g. `https://script.google.com/macros/s/AKfycbx.../exec`).

---

## Step 4: Configure Environment Variables

### Local Development (`.env`)
Create a `.env` file in the root of the project (refer to `.env.example`):

```env
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
VITE_SITE_URL=https://swevenlabs.co
```

### Production Deployment (Vercel / Cloud Run)
1. In Vercel Project Settings → **Environment Variables**:
   - Key: `VITE_GOOGLE_APPS_SCRIPT_URL`
   - Value: `https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec`
2. Redeploy the project for the environment variable to take effect.

---

## Step 5: Test the Integration

1. Run `npm run dev` locally or open your live production site.
2. Scroll to the **"Have a Vision?"** contact section.
3. Fill out the form with test details and click **Send Message**.
4. Open your Google Sheet — a new row with timestamp, contact details, project specifications, and message will appear instantly!

---

## Troubleshooting & Security Notes

- **CORS Issues**: The frontend uses `mode: 'cors'` and `Content-Type: 'text/plain'` with JSON stringification to seamlessly navigate Google Apps Script redirect rules.
- **Spam Protection**: Includes an invisible honeypot field (`honeypot`), client-side email format validation, and button throttling.
- **No Credentials Exposed**: The frontend only knows the public deployment URL. Your Google Account password and Sheets ID remain entirely secret on Google's infrastructure.
