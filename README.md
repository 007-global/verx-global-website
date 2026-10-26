# VERX Global — Signature Website

Fully rebuilt responsive multi-page site with a **sticky top navigation bar**, editable HTML/CSS/JS, branded assets and product imagery.

## Publish to GitHub Pages — no build needed

1. Unzip this package and open the `verx-website` folder.
2. In your GitHub repository, place **all contents** of `verx-website` at the repository root. In particular, `index.html` must be at the root and the `assets` folder alongside it. Don't upload the ZIP alone.
3. In the repository click **Settings → Pages** and set Source = **Deploy from a branch**, Branch = **main**, Folder = **/(root)**. Save.
4. Wait for GitHub Actions Pages deployment to succeed, then visit the Pages URL.
5. If replacing an existing website, ensure files with the same names are updated and old conflicting files are removed. An ordinary web upload may not overwrite every same-named file automatically; verify the commit/file diff.

## What to edit

- `index.html` — homepage copy and layout
- `products.html` — medical categories and collection pages
- `about.html` — about/mission and company text
- `quality.html` — quality and regulatory messaging
- `solutions.html` — healthcare solution information
- `contact.html` — contact form fields and email endpoint
- `style.css` — spacing, typography, color, sticky header, layouts, mobile styles
- `site.js` — shared navigation/menu/footer/search and URL-based enquiry prefills
- `assets/` — images, logo and favicon.

Header stays at the top via `.site-header { position: sticky; top: 0; }` in `style.css`.

## Contact form — IMPORTANT

The contact page POSTs directly to `https://formsubmit.co/info@VERXglobal.com` (third-party FormSubmit service). **This is not an in-house backend.** The mailbox owner needs to activate the service through the FormSubmit verification email after the first submission. Afterwards send a second test submission to confirm delivery. It won't work in offline mode. Do not collect medical records or sensitive patient data with this form.

## Notes before publishing

- Photography and VERX product packaging are illustrative, not proof of stocked products, certifications or packaging used in commerce. Replace with actual licensed photographs and verified documentation when available.
- No unverified certification or ISO claims have been added.
- A lightweight **static HTML/CSS/JavaScript** implementation was intentionally selected instead of React. It loads quickly on GitHub Pages, provides React-like interactive features, and needs **no npm build** or workflow configuration.
- Review company/legal copy, product range and regulatory statements before launch.
- All external links, fonts, and form processing require an internet connection; the site itself works with normal static hosting.
