# VERX Global — Complete GitHub Pages website

This is the complete updated source code for all six pages, images, styles, and interactions. No React build, terminal, server or paid hosting is required. GitHub Pages can host these static files directly.

## Website files
- `index.html` — homepage, clinical hero, product cards, branded showcase
- `products.html` — product-category catalogue and working search/filter
- `about.html` — company and approach
- `quality.html` — quality and compliance page
- `solutions.html` — supply and healthcare solutions
- `contact.html` — contact form and company details
- `style.css` — all shared styling and responsive rules
- `site.js` — sticky navigation, mobile menu, search, hero image selector, category prefill, footer
- `assets/` — official VERX logo, favicon, concept photography, SVG waves

## Publish on GitHub Pages
1. Unzip the archive.
2. In `https://github.com/007-global/verx-global-website`, upload **all files and folders from inside the extracted website** to the root of the `main` branch. `index.html` must be directly in the repository root.
3. Choose `Settings` → `Pages` → `Deploy from a branch` → `main` → `/(root)`.
4. Commit and use `https://007-global.github.io/verx-global-website/`.
5. Hard-refresh in Chrome on Mac (Command + Shift + R).

## Contact and email delivery
- Public contact address in the footer and contact page: `info@verxglobal.com`.
- The Contact form POST target: `https://formsubmit.co/elias@verxglobal.com`.
- This is a real submission endpoint rather than a preview-only interaction, but **delivery must be activated**: submit once, open the activation email at `elias@verxglobal.com`, follow the confirmation link, and then send a second test submission. This package cannot verify the mailbox or successful delivery.
- Do not place private SMTP passwords, API keys, or email credentials in GitHub Pages source.

## Imagery and verification
- Product photographs, product packaging, labels and devices are **illustrative AI-generated concepts**, not validated catalogue entries or actual product photos.
- Generated labels and performance statements in concept packaging are not verified; replace these with actual compliant packaging photos/specifications before publishing a commercial product catalogue.
- The navbar, footer, and branded image overlay use the supplied VERX logo artwork as a separate exact digital asset. Text on AI-generated packaging may be imperfect and is illustrative only.
- Product availability, certifications, claims, and regulatory status require independent confirmation.

## Editing on GitHub
- Change text: edit the appropriate `.html` page and commit.
- Change navigation/footer: edit `site.js`.
- Change sizes/colours/spacing: edit `style.css`.
- Replace a product image: upload a new image to `assets/` with the same filename or update the corresponding HTML `src`.
- Form recipient: change `action="https://formsubmit.co/elias@verxglobal.com"` in `contact.html` and activate the new recipient.
