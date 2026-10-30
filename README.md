# VERX GLOBAL · Aurora Website Edition

Six-page responsive HTML/CSS/JavaScript website. No build step, Node, or React dependency. The sticky header is shared by `site.js`.

## Publishing to GitHub Pages
1. Open the extracted `verx-website` folder; **upload its contents** to the repository root so `index.html` is at the top level.
2. In GitHub → Settings → Pages → Build and deployment, select **Deploy from a branch**, branch `main`, folder `/(root)`.
3. Open the Pages URL shown by GitHub and check every page on desktop and mobile.
4. When replacing older files, upload matching filenames and commit changes. You can instead replace all the website files, but remove obsolete files carefully. Keep the `.nojekyll` file.

## Editing
- `index.html`: Homepage content, hero text, six product categories, three highlight cards.
- `about.html`, `products.html`, `quality.html`, `solutions.html`, `contact.html`: Page content.
- `style.css`: All site styling, including the **Aurora Design System** overrides at its end. Change CSS variables there to update colors globally.
- `site.js`: Shared navigation, footer, mobile menu, search, interactive homepage hero, product filters.
- `assets/wave-accent.svg`: Reusable blue-wave motif from the supplied design reference.
- `assets/`: Local images, logo, and favicon; replace an image by keeping its filename, or update the referring HTML/CSS path.

## Contact form
`contact.html` submits through FormSubmit to `info@VERXglobal.com`. **This is not live until the mailbox owner completes FormSubmit activation and verifies delivery using a published-site test.** Do not use the form for protected health or patient information. Check FormSubmit terms/privacy before launch.

## Important content note
All product and brand-packaging images are illustrative design assets. Do not claim certificates, regulatory approvals, inventory, delivery guarantees, or manufacturer authorizations without evidence. Replace the illustrative images with approved real product photography when available.

## Testing
Review each page and test header, hamburger menu, search, product links, and contact form after deployment. Some browsers aggressively cache styles; refresh with Cmd+Shift+R on macOS if needed.

## Contact email configuration (October 30, 2026)

- **Public contact address** (Contact page and footer): `info@verxglobal.com`.
- **Enquiry submission recipient** (the `action` in `contact.html`): `elias@verxglobal.com` via FormSubmit.co.
- **Required activation:** after deploying, submit the form once, sign in to the `elias@verxglobal.com` mailbox, open the FormSubmit activation email and approve it, then submit another test and verify receipt. Until activated, successful delivery is NOT guaranteed. If no activation email arrives, check spam/junk.
- FormSubmit is a third-party service. Do not request or submit confidential patient information.
- If you ever change the internal recipient, change only `action` inside `contact.html`, leaving the visible `info@verxglobal.com` contact links intact.

## Latest appearance changes

- Centered, larger desktop navigation with improved spacing and a responsive mobile/tablet menu.
- The product-brand image `assets/verx-products.png` has been replaced with a new illustrative studio product photograph. The three branded packages carry composited pixels from the exact official VERX logo artwork, not AI-rendered lettering. The image remains a design concept; it is NOT evidence of physical products or packaging.
- Image artwork can be replaced via GitHub's file upload, keeping exactly the same filename.
