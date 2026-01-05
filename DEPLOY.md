# Deployment Guide for Rync Studio

## 🚀 1. Purchase Your Domain
Great news! **ryncstudio.com** is currently available.
1.  Go to a domain registrar like [Namecheap](https://www.namecheap.com/) or [GoDaddy](https://www.godaddy.com/).
2.  Search for `ryncstudio.com` and purchase it.
    *   *Note:* You can also buy it directly inside Vercel later, but dedicated registrars are often cheaper.

## ⚡ 2. Deploy to Vercel
Since this is a static site (Vite + React), Vercel is the perfect host.

### Option A: The Easy Way (GitHub)
1.  Create a new repository on your [GitHub](https://github.com/new).
2.  Upload all the files from this folder to that repository.
3.  Log in to [Vercel](https://vercel.com/).
4.  Click **"Add New Project"** and select your `rync-studio` repository.
5.  Vercel will auto-detect the settings:
    *   **Framework:** Vite
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`
6.  Click **Deploy**.

### Option B: The Command Line Way (Advanced)
If you have the Vercel CLI installed:
1.  Open your terminal in this folder.
2.  Run `vercel login` to connect your account.
3.  Run `vercel` and follow the prompts.

## 🔗 3. Connect Your Domain
1.  Once deployed, go to your **Project Dashboard** in Vercel.
2.  Click on **Settings** -> **Domains**.
3.  Enter `ryncstudio.com` and click **Add**.
4.  **If you bought it on Vercel:** It connects automatically.
5.  **If you bought it elsewhere:**
    *   Vercel will show you a "Nameservers" error.
    *   It will provide two nameservers (e.g., `ns1.vercel-dns.com`, `ns2.vercel-dns.com`).
    *   Log in to your Domain Registrar (Namecheap/GoDaddy).
    *   Find "DNS Settings" or "Nameservers".
    *   Change them from "Default" to "Custom" and paste the Vercel nameservers.
    *   Wait up to 24 hours (usually 1 hour) for it to propagate.

## 📧 4. Setup Contact Form
To make the contact form work:
1.  Go to [Web3Forms](https://web3forms.com/) and enter your email to get an Access Key.
2.  In Vercel, go to **Settings** -> **Environment Variables**.
3.  Add a new variable:
    *   **Key:** `VITE_WEB3FORMS_ACCESS_KEY`
    *   **Value:** `YOUR_ACCESS_KEY_FROM_EMAIL`
4.  Redeploy the project (or push a small change) to apply the variable.
    *   *Alternatively:* You can paste the key directly into `src/components/Contact.tsx` line 15, replacing `YOUR_ACCESS_KEY_HERE`.

**You're done! Your professional studio site is live.** 🚀